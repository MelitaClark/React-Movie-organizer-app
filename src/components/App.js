import React from 'react';
import './App.css';
import ListItem from "./ListItem";
import AddMovie from "./AddMovie";
import FilterMovie from "./FilterMovie";

let list =[
  {title:'Adams Family',
  format: "DVD"},
  {title:'Beauty And The Beast',
  format: "DVD"},
  {title:'Lion King',
  format: "Blu-Ray"},
  {title:'Drop Dead Fred', 
  format: "Amazon Download"},
  {title:'Nightmare Before Christmas',
  format: "DVD"},
  {title:'Coraline',
  format: "Blu-Ray"},
  {title: 'The Color Purple',
  format: "Download"}
];

localStorage.setItem('list', JSON.stringify(list));

export default class App extends React.Component {
constructor(props){
    super(props);

    this.state ={
      list:JSON.parse(
        localStorage.getItem('list'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete=this.onDelete.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
    this.onChange=this.onChange.bind(this)
  }
componentWillMount(){
    const list =this.getList();
this.setState({list});
  }
getList(){
    return this.state.list
  }

  onAdd(title, format){
    const list = this.getList()
    list.push({
      title,
      format
    });

    this.setState({list});
  }

  onDelete(title){
    const list = this.getList();

    const filteredList = list.filter(list =>{
      return list.title !== title;
    });
    this.setState({list: filteredList});
  }

  onEditSubmit(title, format, originalTitle){
    let list = this.getList();

    list = list.map(list =>{
      if(list.title === originalTitle){
        list.title = title;
        list.format =format;
      }
      return list;
    });
    this.setState({list});
  }

  onChange(title){
  let list = this.getList();

  list = list.filter(list =>{
    return list.title.indexOf(this.state.list) !== -1;
    
  });

  this.setState({list});

}

  render(){
   
  return (
    
    <div className="App" >
      <header className="App-header">
        The Movie Organizer App!
      </header>
      <h1>
        <AddMovie 
         onAdd={this.onAdd}
        />
        <FilterMovie 
        onChange={this.onChange}
        />
      {
        this.state.list.map(list =>{
          return(
            <ListItem 
              key=
              {list.title}
              {...list}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          );
        })
      }
      </h1>
     
    </div>
  );
}
}


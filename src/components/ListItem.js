import React from 'react';


export default class ListItem extends React.Component {
    constructor(props){
        super(props);

        this.state={
          isEdit:false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete(){
        const{onDelete, title} = this.props;
        onDelete(this.props.title);
    }

    onEdit(){
      this.setState({isEdit: true});
    }

    onEditSubmit(event){
      event.preventDefault();

      this.props.onEditSubmit(this.titleInput.value, this.formatInput.value, this.props.title)

      this.setState({ isEdit: false});
    }

  render(){
   const{ title, format} = this.props;


  return (
    <div >
      {
        this.state.isEdit 
        ?
        (
          <form onSubmit={this.onEditSubmit}>
            <input 
          placeholder="Title" 
          ref ={titleInput => this.titleInput=titleInput} 
          defaultValue={title}
          />  
          <input 
          placeholder="Format" 
          ref= {formatInput => this.formatInput=formatInput}
          defaultValue={format}
          />
          <button>Save</button>
            </form>
        )
        : (
          <div>
            
              <span>{title}</span> 
              {` | `}
               <span>{format} </span>
               {` | `}
               <button onClick={this.onEdit}>Edit</button>
               {` | `}
               <button onClick={this.onDelete}>Delete</button>
               </div>
        )
      }
               </div>
         
  );
}
}


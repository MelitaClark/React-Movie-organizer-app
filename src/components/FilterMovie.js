import React from 'react';
import ListItem from './ListItem';


export default class FilterMovie extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    

    onSubmit(event){
        event.preventDefault();
        
    this.props.onChange(this.titleInput.value);

        
        
    }
    
  render(){

  return (
    <form onSubmit={this.onSubmit}>
        <h3>Search Movies:</h3>
          <input 
          placeholder="Title" 
          ref ={titleInput => this.titleInput=titleInput}
          />  
          
          <button>Search</button>

          <hr /> 
               </form>
         
  );
}
}


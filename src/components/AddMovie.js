import React from 'react';


export default class AddMovie extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();

        this.props.onAdd(this.titleInput.value, this.formatInput.value);

        this.titleInput.value = "";
        this.formatInput.value ="";
    }
    
  render(){

  return (
    <form onSubmit={this.onSubmit}>
        <h3>Add A Movie:</h3>
          <input 
          placeholder="Title" 
          ref ={titleInput => this.titleInput=titleInput}
          />  
          <input 
          placeholder="Format" 
          ref= {formatInput => this.formatInput=formatInput}
          />
          <button>Add</button>

          <hr /> 
               </form>
         
  );
}
}


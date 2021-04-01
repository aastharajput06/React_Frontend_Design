import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id : "dmvvkf", name: "Aastha", age : 24},
      { id : "fgvvkf", name: "Richa", age: 24},
      { id : "dvhvkf", name: "blahh", age: 30}
      
    ],
    otherState: 'some other value',
    showPersons : false
  }  

   //useState("some other value");              //useState( {otherState: "some other value"});
  
   //const [otherState, setOtherState] =  useState("some other value"); 
  
   //console.log(personState, otherState) ;


//   switchNameHandler = (newName) => {
//     //console.log("was clicked");
//     // DON'T DO THIS: this.state.person[0].name = "Aastha Rajput"
//     this.setState( {
//     person: [
//       { name: newName, age : 24},
//       { name: "Richa", age: 25},
//       { name: "blahh", age: 30}

//     ]
//   } )
// }

    nameChangedHandler = (event, id) => {

     const personIndex = this.state.persons.find(p => {
       return p.id ===id;
     });

     const person = {
       ...this.state.persons[personIndex] //the Alternative approach without using the spreadoperator is
     };                                  //const person = Object.assign({}, this.state.person[personIndex]); 


     person.name = event.target.value;

     const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons} );
      // [
          // { name: "Aastha", age : 24},
          // { name: event.target.value, age: 24},
          // { name: "blahh", age: 30}
    
       // ]
      } 
    

    togglePersonHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

  deletePersonHandler = (personIndex) => {
    //const person = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }
      
  render() 
   {  
     const style = {
       backgroundColor: 'green',
       color: 'white',
       font: 'inherit',
       border: '1px solid green',
       padding: '8px',
       cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
       <div> 
        <Persons
            persons= {this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.state.nameChangedHandler} />
       </div> 
          );
          
       }
        {/* <Person 
            name={this.state.person[0].name}  
            age={this.state.person[0].age}  />
        
        <Person 
            name ={this.state.person[1].name}
            age ={this.state.person[1].age}
            click = {this.switchNameHandler.bind( this, 'max!' )}
            changed={this.nameChangedHandler} >
              My Hobbies: Sketching,Jumping Rope
        </Person> 

        <Person 
            name={this.state.person[2].name}  
            age={this.state.person[2].age}  /> */}
        
    
      style.backgroundColor = 'red';
    

 
      return (
        <div className="App">
            <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.showPersons}
            clicked = {this.togglePersonHandler } />
            {persons}
          {/* {this.state.showPersons ? */}
               {/* : null} */}
        </div>
    );
   // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Does this work now?'))
  }
}

export default App;



 
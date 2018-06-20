import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
    prop= 1;
    state = {
        persons:[
            {id:'l1',name:'Yong', age:22, hobby:'football'},
            {id:'l2',name:'Liang', age:32, hobby:'basketball'},
            {id:'l3',name: 'Lu', age: 12, hobby: 'baseball'}
        ],
        personShow:false
    };


    onNamechange=(newName)=>
    {
        if(this.prop===1)
        {
            this.prop = 2;
            this.setState(
                {
                    persons:[
                        {name:newName, age:221, hobby:'football'},
                        {name:'Liangs', age:321, hobby:'basketball'}
                    ]
                }
            )
        }

        else{
            this.prop = 1;
            this.setState(
                {
                    persons:[
                        {name:'Yong', age:22, hobby:'football'},
                        {name:'Liang', age:32, hobby:'basketball'}
                    ]
                }
            )
        }
    }
    onClear=()=>
    {
        document.getElementById('sec').style.display="none";

    }
    togglePersonHandler=()=>{
        let showperson = this.state.personShow;
        this.setState(
            {personShow:!showperson}
        )
    }
    deletePersonHandler=(personIndex) =>{
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons:persons});

    }
    nameChangeHandler=(event, id)=>{
        // const personIndex = this.state.persons.findIndex(
        //     (p)=>{
        //         return p.id===id;
        //     })
        //
        // const persons= this.state.persons.slice();
        // persons[personIndex].name=event.target.value;
        // this.setState({persons:persons});

        // there is a better and optimized way

        const personIndex = this.state.persons.findIndex( p=>{return p.id === id});//in angularjs we use ng-repeat, in angular 2
        //we use ngFor, in reactjs, we need to use built-in javascript function: map or find/findIndex to traverse an array
        // const person = Object.assign( {}, this.state.persons[personIndex]);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons:persons});
    }
  render() {
     // return React.createElement('div',null,React.createElement('h1',null,'I\'m a react application'));
      let persons=null;
      if(this.state.personShow)
      // {
      //     persons=( <div>
      //         <Person change={this.onnameChange} name='Li hua' age='33'>riding </Person>
      //         <Person  click={()=>this.onNamechange('SSSS')} name={this.state.persons[0].name} age={this.state.persons[0].name}>hiking </Person>
      //         <Person  name={this.state.persons[1].name} age={this.state.persons[1].name}>skiing </Person>
      //     </div>);
      // }
      {     persons=this.state.persons.map((person,index)=>{
              return(
                  <Person name={person.name}
                            age={person.age}
                            click={()=>this.deletePersonHandler(index)}
                            key={person.id}
                            change={(event)=>this.nameChangeHandler(event,person.id)}>{person.hobby}</Person>
              )
          })
      }
      return (<div id='sec'>
              <button onClick={this.togglePersonHandler}>Toggle persons</button>
              {persons}
          </div>
        )
  }
}

export default App;

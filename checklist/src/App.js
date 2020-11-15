import React, { Component } from 'react';
import  TaskList from './components/TaskList' ;
import NewTodo from './components/NewTodo';
import './App.css'
export class App extends Component {
  state={
    tasks:[
      { id : 1 ,
        desc: "wake up at 06:00" ,
      },
      { id : 2 ,
        desc: " practice some sport " ,
      },
      { id : 3 ,
        desc: "going to work" ,
      },
    ]
  }
  addNewTask = (newTask)=>{
    this.setState({
      tasks : [...this.state.tasks,{desc : newTask, id : Date().now}]})
      
  }
render(){
  return(
    <React.Fragment>
    <TaskList tasks={this.state.tasks}/>
    <NewTodo  addNewTask={this.addNewTask}/>
    </React.Fragment>
  );

}

  }

export default App;




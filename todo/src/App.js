import React from 'react';
import './App.css'

 class App extends React.Component {
   state = {
     todos:[{id :1 , text :"wake up at 06:00" , isDone : false } , {id :2 , text :"going to super market" , isDone : true}]}
   
handelDone =(index)=>{
   this.setState({ todos : this.state.todos.map((todo) =>
    todo.id === index ?{...todo , isDone: ! todo.isDone}:todo) })

}
removeTodo =(index)=>{
  this.setState({todos : this.state.todos.filter((todo)=>todo.id !== index  )})
}
handelAdd =(text)=>{
  const newTodo = {
    id : Date.now() , 
    text: text ,
    isDone : false , 

  };
  
  this.setState({ todos: [...this.state.todos, newTodo] });
  this.setState({ newText: "" });
};

   render(){
  return (
    <React.Fragment>
    <div className="App">
    <form onSubmit={(e)=>e.preventDefault()}>
    <input type="text"/>
    <button  onClick={()=> this.handelAdd("new")}> Add</button>
    </form> 
    </div>
    
    {this.state.todos.map((el)=> <div className="todo-card" key={el.id}>
  <p className={el.isDone ? "done" : ""}> {el.text}</p>
  <button onClick={()=>this.handelDone(el.id)} >{el.isDone ? "undo" : "done"}</button>
    <button onClick={()=>this.removeTodo(el.id)}>Delete</button>
    </div>
    )} 
    
    </React.Fragment>
  );
}
}
export default App;

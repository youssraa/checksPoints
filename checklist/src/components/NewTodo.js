import React ,{useState} from 'react';
import valid from '../assets/valid.png';

const  NewTodo =({addNewTask}) => {

  const[ newTask ,setNewTask]= useState(null);
  const handelChange= e=>{

    setNewTask(e.target.value)
  }

        return (
          <React.Fragment>
            <div>
          <input type="text" onChange={(e)=>handelChange(e)}/>
          <img src={valid} alt="..." onClick={()=> addNewTask(newTask)} />     
            </div>
            </React.Fragment>
        )
    }


export default NewTodo ;
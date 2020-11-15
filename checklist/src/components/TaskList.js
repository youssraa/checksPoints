
import React from 'react';
import TaskCard from './TaskCard'  ;

const TaskList = ({tasks})=> {
   
        return (
            <div>
           {tasks.map((task ,index )=><TaskCard task={task} key={index} />)}    
            </div>
        )
    }
export default TaskList ;

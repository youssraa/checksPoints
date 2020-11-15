
import React from 'react';
import Plus from '../assets/pen.png' ;
import Delete from '../assets/delete.png';

const TaskCard = ({task}) => {

        return (
      
          <div>
             <span> {task.desc} </span>  
             <img src={ Plus } alt="..."/>
             <img src={ Delete }alt ="..."/>
             </div>
        );
    };
export default TaskCard ;


import React from 'react';
import {useParams} from "react-router-dom";
import ReactPlayer from 'react-player';



 const Watch=({movies}) => {
    

let idprm  = useParams();
      const movid=movies.find((el) =>(el.id == idprm.id));      
        return (
<React.Fragment>
<div className="movie_watch" id="bright">
<ReactPlayer
    url={movid.link}
    controls
    playbackRate = {2}
    width = "888px"
    height = "555px"
/>
  <p> {movid.synop}</p>    
    </div>

    </React.Fragment>
    
        );
    }


export default Watch

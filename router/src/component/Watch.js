
import React from 'react';
import {useParams} from "react-router-dom";
import ReactPlayer from 'react-player'


 const Watch=({movies}) => {
let idprm  = useParams();

      const movid=movies.find((el) =>(el.id == idprm.id));
      
        return (
<div className="movie_card" id="bright">
<ReactPlayer
    url={movid.link}
    controls
    playbackRate = {2}
    width = "696px"
    height = "324px"
/>
      
    
             

    </div>
    
        );
    }


export default Watch

import React from "react";
import StarRatingComponent from "react-star-rating-component";
import {Link} from 'react-router-dom';

const MovieCard = ({ movie }) => {
 // const rating = (stars) => {
 //   let arr =[]
 //    for (let i = 0; i <= stars; i++) {
 //    arr.push(
 //    <Rate key={i} />) ;
 //   }
 //   return arr
//  };// {rating(movie.stars)}
var divStyle = {
  backgroundImage: 'url(' + movie.cover + ')',
  backgroundSize:'100%' ,
};
 
  return (
    <div>
      <div className="movie_card" id="bright" style={divStyle}>
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={movie.src} alt="..."/>
            <h1>{movie.title}</h1>
            <h4>{movie.date}</h4>
            <span className="minutes">{movie.timee}</span>
            <p className="type">{movie.type}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.desc}</p>
            <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={movie.stars}
            
          />
            <Link to={`/watch/${movie.id}`} >
            <button className="watch" > watch now </button>
           </Link>
         
          </div>
        </div>
        <div ></div>
      </div>
    </div>
  );
};

export default MovieCard;

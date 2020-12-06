
import React  from 'react';
import {BrowserRouter as Router ,Switch , Route }from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row} from 'react-bootstrap';
import Filter from './component/Filter';
import MovieList from './component/MovieList';
import NavBar from './component/NavBar';
import NewMovie from './component/NewMovie';
import Rate from './component/Rate';
import Watch from './component/Watch';
import './App.scss';
class App extends React.Component {
  state={
    movies:[
      { id : 1 ,
        title: "Brigth" ,
        date : "2017, David Ayer" ,
        timee : "117 minutes" ,
        type : "Action, Crime, Fantasy" , 
        desc : " Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. " ,
        src: "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg " ,
        cover :"https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg",
        stars : 4 ,
        link:"https://www.youtube.com/watch?v=ZKzvjeqmxuY",
        
       
       
      },
      { id : 2 ,
        title: "Tom Raider" ,
        date : "2018 Roar Uthaug" ,
        timee : "125 minutes" ,
        type : "Action, Fantasy" ,  
        desc : " Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared. " ,
        src: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
        cover : "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",
        stars : 4 ,  
        link :"https://www.youtube.com/watch?v=1Sabpx02eyw&ab_channel=JEUXACTU",
      },
      { id : 2 ,
        title: "Black Panther" ,
        date : "2018, Ryan Coogler" ,
        timee : "134 min" ,
        type : "Action, Adventure, Sci-Fi" ,  
        desc : " T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.  " ,
        src: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
        cover : "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg", 
        stars : 3 , 
        link :"https://www.youtube.com/watch?v=noTuWxGmYlw",
      },
 
    ],
    searchTerm:'' ,
    isChecked:false,
    searchRate:1,
    rating : 1 ,

        
    }
    
  
  addNewMovie = (newMovie)=>{
    this.setState({
      movies : [...this.state.movies,{ id : Date().now ,title:newMovie.title , timee:newMovie.timee  , type:newMovie.type , desc:newMovie.desc ,src:newMovie.src , cover:newMovie.cover ,stars:newMovie.stars}]})
 
    }

    dynamicSearch = () => {
      return ( this.state.movies.filter( movie =>
         movie.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
    } 
    dynamicRating = () => {
      return ( this.state.movies.filter( movie =>
        ( movie.stars===this.state.rating) || ( this.state.rating===1)))
    }

    ratingSearch =(ValueSearch)=>{this.setState({
      rating:ValueSearch
    })

    } 
 
  
 
  render(){

  


  return (
    <React.Fragment>
        <Router>
       
 
       <NavBar onTextChange={text=>this.setState({searchTerm:text})}/> 
       

<Row>
 


  <Col>

  <Route path="/"  component={()=><Filter handelClick={isChecked=> this.setState({
        isChecked :! this.state.isChecked  })} movies={this.state.movies} StarChange={star=>this.setState({searchRate:star})}/> } />
  
 </Col>


 <Col>
  <Route path="/"  component={()=><Rate rating={(R)=>this.ratingSearch(R)} /> } />

 {this.state.isChecked && 
  <NewMovie addNewMovie={this.addNewMovie} handelClick={isChecked=> this.setState({
    isChecked :! this.state.isChecked  })}  />
 }
 {}
<Route path="/movies" exact component={()=><MovieList movies={(this.state.searchTerm ==='')? (this.dynamicRating(this.movies) || this.dynamicSearch(this.movies)): (this.dynamicRating(this.movies)&&this.dynamicSearch(this.movies))} /> } />
<Route path="/watch/:id" exact component={()=><Watch movies={this.state.movies} />}/> 
  </Col>
  <Col>
 </Col>
  </Row>

  
 
 
  
  </Router>
</React.Fragment>

    
  );
}
}
export default App;


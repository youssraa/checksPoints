import React from 'react' ;
import StarRatingComponent from "react-star-rating-component";
import '../Rate.css' ;
class Rate extends React.Component {
    state={
        rating: 1
    }
    onStarClick = (nextValue, prevValue, name)=> {
        this.setState({rating: nextValue});
        this.props.rating(nextValue)
      }
       render(){
        return (
            < div className="rating-wrap">
                
            <StarRatingComponent  className="rate" starCount={5} value={this.state.rating}
            onStarClick={this.onStarClick}/>
            </div>
            
         
             
        )
    }
}

export default Rate;

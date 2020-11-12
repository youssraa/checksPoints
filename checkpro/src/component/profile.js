import React from 'react'
import propTypes from 'prop-types';
import { Row , Col} from 'react-bootstrap' ;
class Profile extends React.Component {
  render() {
    return (
  
        <>
        <div onLoad={()=>alert("Welcome  "+ this.props.fullName)}>
          <div className="wlcm">
        <h1 >Name :  {this.props.fullName}</h1>
        <h5><i>Bio " {this.props.bio} "</i></h5> 
        <h3>{this.props.profession}</h3>
        </div>
       <div className = "images"> {this.props.children} </div> 
       
        </div> 
        </>
    )

}
}
  Profile.propTypes= {
    fullName: propTypes.string ,
    bio : propTypes.string ,
    profession : propTypes.string ,
  }

Profile.defaultProps = {
    delay: 100,
  }
  

  export default Profile;

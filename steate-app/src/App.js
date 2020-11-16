
import './App.css';
import React from 'react';
import  "bootstrap/dist/css/bootstrap.min.css"
import {Button,Card , ListGroup , ListGroupItem} from 'react-bootstrap';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      fullName :  "yosra tayachi" , 
      bio : "Websites promote you 24/7: No employee will do that" , 
      imgSrc : "logoT.PNG",
      profession : "dev web ",
      isChecked : true ,
      digit:0,
    };  
    this.handelClick =this.handelClick.bind(this);
  }
  componentDidMount = () =>{
    setInterval(()=>{
      this.setState(prevState=>({digit : prevState.digit +1 ,}));
    },1000);
  } ;
  handelClick(){
    this.setState(state=>({
      isChecked :!state.isChecked 
    }))
  }
  render(){
     return (
     <React.Fragment>
       <div className="hello">
    <Button variant="primary" onClick={this.handelClick }>{this.state.isChecked? "Hide" : "Show "} </Button>
    {/* {this.state.isChecked ? this.isDisplayed() :this.noDisplayed()} */}
    {this.state.isChecked && 
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.imgSrc} />
  <Card.Body>
    <Card.Title>Welcome {this.state.fullName} </Card.Title>
    <Card.Text>
   <i>"  {this.state.bio}  " </i> 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{this.state.profession}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">counter : {this.state.digit}</Card.Link>
  </Card.Body>
    </Card>
     }
     </div>

     </React.Fragment>
  );
}
}
export default App;

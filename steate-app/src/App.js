import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      fullName :  "yosra tayachi" , 
      bio : "blablabla" , 
      imgSrc : "logoT.PNG" ,
      profession : "dev web ",
      isChecked : false ,
      digit:0,
    };  
    this.handelClick =this.handelClick.bind(this);
  }
  handelClick(){
    this.setState(state=>({
      isChecked :!state.isChecked 
    }))
  }
  componentDidMount =()=>{
    setInterval =(()=>{
      this.setState(prevState =>({
        digit: prevState.digit +1 
      }));
    }, 1000);

     }; 
  isDisplayed() {

    var x = document.getElementById("myDIV");
      x.style.display = "block";
    }
    noDisplayed() {

      var x = document.getElementById("myDIV");
        x.style.display = "none";
      }


  
  render(){
     return (
     <React.Fragment>
    <button onClick={this.handelClick }> click me </button>
    {this.state.isChecked ? this.isDisplayed() :this.noDisplayed()}
     <div id="myDIV" >
     <h1> {this.state.fullName}</h1>
     <h1> {this.state.bio}</h1>
     <h1> {this.state.imgSrc}</h1>
     <h1> {this.state.fullName}</h1>
     <span> counter : {this.state.digit}</span>
     </div>

     </React.Fragment>
  );
}

}
export default App;

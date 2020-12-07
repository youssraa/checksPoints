import React ,{useEffect , useState} from 'react';
import axios from 'axios';
import PersonCard from './PersonCard'
 function PersonList() {
 const [persons , setPersons] = useState([]);

  useEffect(async ()=>{
 axios({
       methode :'GET' ,
       url : 'https://jsonplaceholder.typicode.com/users'
 }).then(res=>{
     setPersons(res.data);
    })
   
    },[])
  
    return (
        <div className="list-wrapper" ng-app="app" ng-controller="MainCtrl as ctrl">
        <ul className="list">
        { persons.map(person => <PersonCard  key={person.id} person={person} />)}
      </ul>
      </div>
    )
  }

export default PersonList;
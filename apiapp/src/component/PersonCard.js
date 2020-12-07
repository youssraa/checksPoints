import React  from 'react';


 function PersonCard(props) {

  
    return (
       <React.Fragment>
          <li className="list-item">
            <div>
              <img src="profile.png" className="list-item-image" />
            </div>
            <div className="list-item-content">
    <h4>{props.person.name}</h4>
    <p>{props.person.email} test</p>
            </div>
          </li>
       
      </React.Fragment>
    )
  }

export default PersonCard;
     
        
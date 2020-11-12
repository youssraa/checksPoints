import logo from './logo.svg';
import './App.css';
import Profile from './component/profile'
import { Row , Col} from 'react-bootstrap' ;

function App() {
 
  return (
   
 <Row> 
   
    <div className="App">   
   
<Profile  fullName="yosra tayachi"   bio="practice make it perfect"  profession="dev web " >
<img src="child.jpg" alt="child"  />
</Profile>

    </div>
   
    </Row>
  );
}

export default App;

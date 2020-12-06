
import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Col ,FormControl, Button,InputGroup} from 'react-bootstrap';
const NewMovie = ({addNewMovie ,handelClick}) =>{
    const [newMovie , setNewMovie]=useState({title:'',date:'',timee:'',type:'',stars:1 ,src:'',cover:'',desc:''});
   
  
   const handleChange=(e)=>{
      setNewMovie({
        ...newMovie,
        [e.target.name]:e.target.value
      })
     
 
    }

    return(
   <div className="movie_card" id="bright">
    <Form onSubmit={(e) => e.preventDefault()}>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder="title" value={newMovie.title} name='title' onChange={(e)=>handleChange(e)} />
  </Form.Group>

  <Form.Group  as={Col} controlId="formGridAddress2">
    <Form.Label>Realizator</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" name='date' onChange={(e)=>handleChange(e)} />
  </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Duration</Form.Label>
      <Form.Control name='timee'  onChange={(e)=>handleChange(e)} />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Type</Form.Label>
      <Form.Control name='type'  onChange={(e)=>handleChange(e)} />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Stars</Form.Label>
      <Form.Control name='stars' placeholder="1 to 5 " onChange={(e)=>handleChange(e)}  />
      
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Movie Picture URL</Form.Label>
    <Form.Control placeholder="url " name='src' onChange={(e)=>handleChange(e)} />
  </Form.Group>

  <Form.Group  as={Col} controlId="formGridAddress2">
    <Form.Label>Movie Cover URL</Form.Label>
    <Form.Control placeholder="url" name='cover' onChange={(e)=>handleChange(e)} />
  </Form.Group>
  </Form.Row>
  <Form.Group  controlId="formGridAddress1">
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Description</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" name='desc'aria-label="With textarea" onChange={(e)=>handleChange(e)}  />
  </InputGroup>
  </Form.Group>
  <Button variant="btn btn-dark" type="submit" onClick={()=>{addNewMovie(newMovie) ; handelClick() }} >
   Add
  </Button>
</Form>
</div>
);

}
export default NewMovie ;
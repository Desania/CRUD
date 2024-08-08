import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from "axios"
function CreateUsers()
 {

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [age,setAge]=useState();

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:2000/createUser",{name,email,age})
        .then(result =>
           {
            console.log(result);
            alert("created");
           })
        .catch(err => console.log(err))
    }
   
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
        <Form onSubmit={Submit}>
            <h2>Add User</h2>
        <Form.Group className="mb-3" controlId="Name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="Age">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" onChange={(e)=>setAge(e.target.value)}/>
    </Form.Group>
    <button className='btn btn-success'>Submit</button>
  </Form>
        
        </div>
    </div>
  )
}

export default CreateUsers
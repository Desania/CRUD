import React from 'react'
import Form from 'react-bootstrap/Form';

function UpdateUsers() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
    <Form>
        <h2>Update User</h2>
    <Form.Group className="mb-3" controlId="Name">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" />
</Form.Group>
<Form.Group className="mb-3" controlId="Age">
  <Form.Label>Age</Form.Label>
  <Form.Control type="number"/>
</Form.Group>
<button className='btn btn-success'>Update</button>
</Form>
    
    </div>
</div>
  )
}

export default UpdateUsers
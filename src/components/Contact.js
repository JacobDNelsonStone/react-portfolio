import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';



function Contact(props) {
  // const [contactInfo, setContactInfo] = useState([]);

  // async function submitContactForm(){

  // }

  return (
    <center><div className='pb-2 LightBlue'>
      <h1>Contact Me</h1>
      <Form className='col-5 '>
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="first-name" placeholder="Enter your first name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="last-name" placeholder="Enter your last name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div></center>
  )
}

export default Contact
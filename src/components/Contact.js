import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';



function Contact(props) {
  const defForm = { email: "", fname: '', lname: "" }
  const [formData, setFormData] = useState(defForm)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target)

  }

  return (
    <div className='pb-2 LightBlue Rounded col-xl-5 col-sm-8 px-3 ms-5'>
      <h1>Contact Me</h1>
      <Form className=''>
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="first-name"
            name="fname"
            value={formData.fname}
            placeholder="Enter your first name"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="last-name" 
            name="lname"
            value={formData.lname}
            placeholder="Enter your last name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            value={formData.email}
            placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Contact
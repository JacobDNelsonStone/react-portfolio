import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';



function Contact(props) {
  let defForm = { email: "", fname: '', lname: "", message: '' }
  const [formData, setFormData] = useState(defForm)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    console.log('==========', formData.message)
    
    if( formData.email === '' || formData.fname === ''  || formData.lname === ''  || formData.message === '' ) {
      alert("all form fields must be filled out :)")
    } else {
      alert('Thank you for submitting your contact info!')
    }
  }

  return (
    <div className='pb-2 LightBlue Rounded col-xl-6 col-11 px-3 ms-3'>
      <h1>Contact Me</h1>
      <Form className=''>
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
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
            required
            type="last-name"
            name="lname"
            value={formData.lname}
            placeholder="Enter your last name"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Send a Short Info Message</Form.Label>
          <Form.Control
            required
            type="text"
            name="message"
            value={formData.message}
            placeholder="Enter a short message with your inquiry"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button className='DarkBlue mt-2 ActiveLink NoOutline' type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Contact
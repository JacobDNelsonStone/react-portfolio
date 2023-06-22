import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useRef } from 'react';
import emailjs from 'email-js';
// import dotenv from 'dotenv';


function Contact(props) {
  // dotenv.config();
  // const serviceId = process.env.YOUR_SERVICE_ID
  // const templateId = process.env.YOUR_TEMPLATE_ID


  const form = useRef()
  let defForm = { email: "", fullname: "", message: '' }
  const [formData, setFormData] = useState(defForm)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.fullname]: e.target.value })
    console.log(formData)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    console.log('==========', formData.message)

    if (formData.email === '' || formData.fullname === '' || formData.message === '') {
      alert("all form fields must be filled out :)")
    } else {
      emailjs.sendForm('service_4bozhi9', 'template_kmx5l68', form.current, 'UQnsDdqDQWOIIrFZp')
        .then((result) => {
          alert('Thank you for submitting your contact info!')
          console.log(result)
          // show the user a success message
        }, (error) => {
          alert('There was an unexpected error, please try again!')
          console.log(error)
          // show the user an error
        })
      setFormData({email: "", fullname: "", message: ''})
    }
  }

  return (
    <div className='pb-2 LightBlue Rounded col-xl-6 col-11 py-3 px-3 ms-3'>
      <h1>Contact Me</h1>
      <Form ref={form} className=''>
        <Form.Group className="mb-3" controlId="formBasicLName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="fullname"
            value={formData.fullname}
            placeholder="Enter your full name"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Send a Short Message to Me</Form.Label>
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
        <Button className='DarkBlue mt-2 mb-2 ActiveLink NoOutline' type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Contact
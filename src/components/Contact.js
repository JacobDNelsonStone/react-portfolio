import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv';
import FadeIn from './FadeIn';

function Contact(props) {
  // dotenv.config();
  // const serviceId = process.env.YOUR_SERVICE_ID
  // const templateId = process.env.YOUR_TEMPLATE_ID


  const form = useRef()
  let defForm = { email: "", fullname: "", message: '' }
  const [formData, setFormData] = useState(defForm)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    console.log('==========', formData.message)

    if (formData.email === '' || formData.fullname === '' || formData.message === '') {
      alert("all form fields must be filled out :)")
    } 
    //   else if (formData.email != /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ){
    //   alert("Email must be a valid email address.")
    // } 
      else {
      emailjs.sendForm('service_4bozhi9', 'template_3lrq2or', form.current, 'UQnsDdqDQWOIIrFZp')
        .then((result) => {
          alert('Thank you for sending me a message!')
          console.log(result.text)
          // show the user a success message
        }, (error) => {
          alert('There was an unexpected error, please try again!')
          console.log(error.text)
          // show the user an error
        })
      setFormData({ email: "", fullname: "", message: '' })
    }
  }

  return (
    <FadeIn>
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
              placeholder="Enter a valid email address"
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Send a short message to me</Form.Label>
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
    </FadeIn>
  )
}

export default Contact
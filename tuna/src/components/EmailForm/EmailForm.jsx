import React, { useState } from 'react'
import emailjs from "@emailjs/browser"

const EmailForm = () => {

const [name, setName]=useState()
const [email, setEmail]=useState()
const [message, setMessage]=useState()

const handleSubmit=(e)=>{
    e.preventDefault()

    const serviceId="service_1rigzui"
    const templateId="template_0oq9o8b"
    const publicKey="Sp1DH0OemN8mGvZNC"

const templateParams={
    from_name:name,
    from_email:email,
    to_name:"Tuna",
    message:message
}

emailjs.send(serviceId, templateId, templateParams,publicKey)
.then((response)=>{
    console.log("Email sent succesfully", response)
    setName("")
    setEmail("")
    setMessage("")
})
.catch((error)=>{
    console.log("Error sending email", error)
})

}

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
        <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
        />
        <button type='submit'>Send Email</button>
    </form>
  )
}

export default EmailForm
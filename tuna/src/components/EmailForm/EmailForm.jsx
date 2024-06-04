import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

const EmailForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_1rigzui";
    const templateId = "template_0oq9o8b";
    const publicKey = "Sp1DH0OemN8mGvZNC";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tuna",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent succesfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Bizimle İletişime Geçin</h1>
        <p>
          Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size
          geri dönüş yapacağız.
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Gönder
          </button>
        </form>
        {/* <form onSubmit={handleSubmit} className="emailForm">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Email</button>
        </form> */}
      </div>
    </div>
  );
};

export default EmailForm;

import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/send-email', formData);
            setResponseMessage(response.data.message);
        } catch (error) {
            setResponseMessage('Mesajınız gönderilirken bir hata oluştu.');
        }
    };

    return (
        <div>
            <h2>Bizimle İletişime Geçin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Adınız:</label><br />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

                <label htmlFor="email">E-posta Adresiniz:</label><br />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

                <label htmlFor="subject">Konu:</label><br />
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required /><br /><br />

                <label htmlFor="message">Mesajınız:</label><br />
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea><br /><br />

                <input type="submit" value="Gönder" />
            </form>
            <p>{responseMessage}</p>
        </div>
    )
}

export default Contact
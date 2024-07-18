import "./Contact.css"
import EmailForm from '../../components/EmailForm/EmailForm'
import { Link } from "react-router-dom";
import WhatsAppLink from '../../components/Footer/WhatsAppLink';


const Contact = () => {
  const phoneNumber = "905322505784"; // Ülke kodu ile birlikte telefon numarası
  const message = "Tuna iş güvenliği!";
  return (
    <div className="contact">
      <EmailForm />
      <div>
        <ul>
          <li className="adres">İnönü Mah. 375. Sokak No:7 <br /> Bağcılar/İstanbul</li>
          <li className='arama'>
            <div className='cepNumber'><a href="tel:+905322505784">+90 532 250 5784</a></div>
            <div>
              <WhatsAppLink phoneNumber={phoneNumber} message={message} /></div>
          </li>
        </ul>
      </div>
      <div className="map-tn">
        <iframe style={{ width: '100%', height: '400px', borderRadius: '20px' }} src="https://www.google.com/maps/d/u/6/embed?mid=1HvMPDb2MjqMppAGpD0ccpFCZcg-h6-I&ehbc=2E312F" className='map'></iframe>
      </div>
    </div>
  )
}

export default Contact
import "./Contact.css"
import EmailForm from '../../components/EmailForm/EmailForm'

const Contact = () => {
  return (
    <div className="contact">
      <EmailForm />
      <div className="map-tn">
        <iframe style={{ width: '100%', height: '400px', borderRadius: '20px' }} src="https://www.google.com/maps/d/u/6/embed?mid=1HvMPDb2MjqMppAGpD0ccpFCZcg-h6-I&ehbc=2E312F" className='map'></iframe>
      </div>
    </div>
  )
}

export default Contact
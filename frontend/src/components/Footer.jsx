import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-wrapper">

        {/* Left */}
        <div className="footer-brand">
          <img src="/assets/svg/logo.svg" alt="DigiTeach Logo" />

          <p>
            Turning digital access into digital confidence -
            starting with teachers, growing through community.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h3>Explore</h3>

          <ul>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Get Involved</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>

          <ul>
            <li><i className="fa-solid fa-phone"></i> +254 700 111 222</li>
            <li><i className="fa-regular fa-envelope"></i> support@digiteach.org</li>
            <li><i className="fa-solid fa-location-dot"></i> Nairobi, Kenya</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-wrapper">
          <p>Copyright © DigiTeach. All Rights Reserved</p>

          <div className="footer-bottom-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
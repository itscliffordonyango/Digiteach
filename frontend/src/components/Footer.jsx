import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-wrapper">

        {/* LEFT */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">

            {/* INLINE SVG LOGO */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 550 150"
              className="footer-logo-svg"
              role="img"
              aria-labelledby="footer-logo-title"
            >
              <title id="footer-logo-title">DIGITEACH Logo</title>

              <g transform="translate(10,0)">
                <circle cx="90" cy="115" r="2" fill="#1A2B4C" />
                <circle cx="65" cy="125" r="3" fill="#3D8B7A" />
                <circle cx="115" cy="125" r="3" fill="#3D8B7A" />
                <circle cx="45" cy="105" r="2.5" fill="#1A2B4C" />
                <circle cx="135" cy="105" r="2.5" fill="#1A2B4C" />

                <path
                  d="M 45 105 A 50 50 0 0 0 135 105"
                  fill="none"
                  stroke="#1A2B4C"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />

                <path
                  d="M 65 125 Q 90 100 115 125"
                  fill="none"
                  stroke="#3D8B7A"
                  strokeWidth="1"
                />

                <path
                  d="M 90 95 Q 65 75 30 85 L 30 55 Q 65 45 90 65 Z"
                  fill="none"
                  stroke="#1A2B4C"
                  strokeWidth="4.5"
                />

                <path
                  d="M 90 95 Q 115 75 150 85 L 150 55 Q 115 45 90 65 Z"
                  fill="none"
                  stroke="#1A2B4C"
                  strokeWidth="4.5"
                />

                <path
                  d="M 90 85 C 70 75 55 50 65 35 C 80 45 85 65 90 85 Z"
                  fill="#4AA785"
                />

                <path
                  d="M 90 85 C 110 75 125 50 115 35 C 100 45 95 65 90 85 Z"
                  fill="#3D8B7A"
                />

                <path
                  d="M 40 70 A 58 58 0 1 1 140 70"
                  fill="none"
                  stroke="#3D8B7A"
                  strokeWidth="2.5"
                />
              </g>

              <text
                x="185"
                y="92"
                fontFamily="Inter, sans-serif"
                fontSize="62"
                fontWeight="700"
                fill="#3D8B7A"
              >
                DIGI
              </text>

              <text
                x="322"
                y="92"
                fontFamily="Inter, sans-serif"
                fontSize="62"
                fontWeight="800"
                fill="#1A2B4C"
              >
                TEACH
              </text>
            </svg>
          </Link>

          <p>
            Turning digital access into digital confidence —
            starting with teachers, growing through community.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <h3>Explore</h3>

          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>

          <ul>
            <li><i className="fa-solid fa-phone"></i> +254 700 111 222</li>
            <li><i className="fa-regular fa-envelope"></i> support@digiteach.org</li>
            <li><i className="fa-solid fa-location-dot"></i> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="container footer-bottom-wrapper">
          <p>Copyright © DigiTeach. All Rights Reserved</p>

          <div className="footer-bottom-links">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
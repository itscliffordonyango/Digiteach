import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [onScroll, setOnScroll] = useState(false)

  useEffect(() => {
    const onScrollHandler = () => setOnScroll(window.scrollY > 10)
    onScrollHandler()
    window.addEventListener('scroll', onScrollHandler)
    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [])

  return (
    <>
      {/* TOP BAR */}
      <section className="top-bar" aria-label="Top contact bar">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="left-contact d-flex gap-3 flex-wrap">
              <span>
                <i className="fa-solid fa-location-dot" aria-hidden="true" /> Nairobi, Kenya
              </span>
              <span>
                <i className="fa-regular fa-envelope" aria-hidden="true" /> support@digiteach.org
              </span>
            </div>

            <div className="right-contact d-flex align-items-center gap-3">
              <span>
                <i className="fa-solid fa-phone" aria-hidden="true" /> +254 700 111 222
              </span>

              <div className="social-box" aria-label="Social links">
                <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                <i className="fa-brands fa-twitter" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVBAR */}
      <nav
        className={`navbar navbar-expand-lg main-navbar ${onScroll ? 'navbar--on-scroll' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="container">
          <Link className="navbar-brand logo-wrapper" to="/" aria-label="DigiTeach home">
            <div className="logo-container">
              <svg
                className="logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 550 150"
                role="img"
                aria-labelledby="logo-title"
              >
                <title id="logo-title">DIGITEACH Logo</title>

                {/* LOGO ICON */}
                <g transform="translate(10,0)">
                  {/* Base nodes */}
                  <circle cx="90" cy="115" r="2" fill="#1A2B4C" />
                  <circle cx="65" cy="125" r="3" fill="#3D8B7A" />
                  <circle cx="115" cy="125" r="3" fill="#3D8B7A" />
                  <circle cx="45" cy="105" r="2.5" fill="#1A2B4C" />
                  <circle cx="135" cy="105" r="2.5" fill="#1A2B4C" />
                  <path
                    d="M45 105 A50 50 0 0 0 135 105"
                    fill="none"
                    stroke="#1A2B4C"
                    stroke-width="1.5"
                    stroke-dasharray="3,3"
                  />
                  <path d="M65 125 Q90 100 115 125" fill="none" stroke="#3D8B7A" stroke-width="1" />
                  <path
                    d="M45 105 L65 125 L90 115 L115 125 L135 105"
                    fill="none"
                    stroke="#1A2B4C"
                    stroke-width="0.75"
                  />
                  <path d="M90 115 L90 90" fill="none" stroke="#1A2B4C" stroke-width="1.5" />

                  {/* Book */}
                  <path
                    d="M90 95 Q65 75 30 85 L30 55 Q65 45 90 65 Z"
                    fill="none"
                    stroke="#1A2B4C"
                    stroke-width="4.5"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M90 95 Q115 75 150 85 L150 55 Q115 45 90 65 Z"
                    fill="none"
                    stroke="#1A2B4C"
                    stroke-width="4.5"
                    stroke-linejoin="round"
                  />

                  {/* Leaves */}
                  <path
                    d="M90 85 C70 75 55 50 65 35 C80 45 85 65 90 85 Z"
                    fill="#4AA785"
                  />
                  <path
                    d="M90 85 C110 75 125 50 115 35 C100 45 95 65 90 85 Z"
                    fill="#3D8B7A"
                  />

                  {/* Bulb */}
                  <path
                    d="M80 32 C70 32 68 15 90 15 C112 15 110 32 100 32 L97 40 L83 40 Z"
                    fill="none"
                    stroke="#3D8B7A"
                    stroke-width="3"
                  />

                  {/* Outer arch */}
                  <path
                    d="M40 70 A58 58 0 1 1 140 70"
                    fill="none"
                    stroke="#3D8B7A"
                    stroke-width="2.5"
                    stroke-dasharray="180 20 10 20"
                    stroke-linecap="round"
                  />
                </g>

                {/* TEXT */}
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
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" aria-hidden="true" />
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navMenu">
            <ul className="navbar-nav gap-4 text-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DigiTeach
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <a href="#" className="btn get-btn d-none d-lg-inline-flex">
            Get Involved <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </>
  )
}


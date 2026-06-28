import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      
      {/* TOP BAR */}
      <section className="top-bar">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">

            <div className="left-contact d-flex gap-3 flex-wrap">
              <span>
                <i className="fa-solid fa-location-dot" /> Nairobi, Kenya
              </span>

              <span>
                <i className="fa-regular fa-envelope" /> support@digiteach.org
              </span>
            </div>

            <div className="right-contact d-flex align-items-center gap-3">
              <span>
                <i className="fa-solid fa-phone" /> +254 700 111 222
              </span>

              <div className="social-box">
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-brands fa-twitter" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NAVBAR */}
      <nav className={`navbar navbar-expand-lg main-navbar ${scrolled ? "navbar-fixed" : ""}`}>
        <div className="container">

          {/* LOGO */}
          <Link className="navbar-brand logo-wrapper" to="/">
            <div className="logo-container">
              <svg
                className="logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 550 150"
              >
                <title>DigiTeach Logo</title>

                <g transform="translate(10,0)">
                  <circle cx="90" cy="115" r="2" fill="#1A2B4C" />
                  <circle cx="65" cy="125" r="3" fill="#3D8B7A" />
                  <circle cx="115" cy="125" r="3" fill="#3D8B7A" />
                  <circle cx="45" cy="105" r="2.5" fill="#1A2B4C" />
                  <circle cx="135" cy="105" r="2.5" fill="#1A2B4C" />

                  <path
                    d="M45 105 A50 50 0 0 0 135 105"
                    fill="none"
                    stroke="#1A2B4C"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />

                  <path
                    d="M65 125 Q90 100 115 125"
                    fill="none"
                    stroke="#3D8B7A"
                    strokeWidth="1"
                  />

                  <path
                    d="M45 105 L65 125 L90 115 L115 125 L135 105"
                    fill="none"
                    stroke="#1A2B4C"
                    strokeWidth="0.75"
                  />

                  <path
                    d="M90 115 L90 90"
                    fill="none"
                    stroke="#1A2B4C"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M90 95 Q65 75 30 85 L30 55 Q65 45 90 65 Z"
                    fill="none"
                    stroke="#1A2B4C"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M90 95 Q115 75 150 85 L150 55 Q115 45 90 65 Z"
                    fill="none"
                    stroke="#1A2B4C"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M90 85 C70 75 55 50 65 35 C80 45 85 65 90 85 Z"
                    fill="#4AA785"
                  />

                  <path
                    d="M90 85 C110 75 125 50 115 35 C100 45 95 65 90 85 Z"
                    fill="#3D8B7A"
                  />

                  <path
                    d="M80 32 C70 32 68 15 90 15 C112 15 110 32 100 32 L97 40 L83 40 Z"
                    fill="none"
                    stroke="#3D8B7A"
                    strokeWidth="3"
                  />

                  <path
                    d="M40 70 A58 58 0 1 1 140 70"
                    fill="none"
                    stroke="#3D8B7A"
                    strokeWidth="2.5"
                    strokeDasharray="180 20 10 20"
                    strokeLinecap="round"
                  />
                </g>

                <text
                  x="185"
                  y="92"
                  fontFamily="Inter"
                  fontSize="62"
                  fontWeight="700"
                  fill="#3D8B7A"
                >
                  DIGI
                </text>

                <text
                  x="322"
                  y="92"
                  fontFamily="Inter"
                  fontSize="62"
                  fontWeight="800"
                  fill="#1A2B4C"
                >
                  TEACH
                </text>
              </svg>
            </div>
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <i className="fa-solid fa-bars" />
          </button>

          {/* LINKS */}
          <div className="collapse navbar-collapse justify-content-center" id="navMenu">
            <ul className="navbar-nav gap-4 text-center">
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><a className="nav-link" href="#">About Us</a></li>
              <li><a className="nav-link" href="#">DigiTeach</a></li>
              <li><a className="nav-link text-success" href="#">Contact</a></li>
            </ul>
          </div>

          <a href="#" className="btn get-btn d-none d-lg-inline-flex">
            Get Involved <i className="fa-solid fa-arrow-right ms-2" />
          </a>

        </div>
      </nav>
    </header>
  );
}
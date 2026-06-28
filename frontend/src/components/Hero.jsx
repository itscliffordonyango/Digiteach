export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-wrapper container">

          {/* LEFT */}
          <div className="hero-left">
            <p className="hero-tagline">Because access alone isn’t enough.</p>

            <h1>
              Turning <br />
              Digital <span>
                <s style={{ textDecorationThickness: "0.4rem" }}>Access</s>
              </span>
              <br />
              Digital <span className="highlight">Confidence</span>
            </h1>

            <p className="hero-description">
              Helping teachers and communities build practical digital skills,
              online safety awareness and everyday confidence with technology.
            </p>

            <div className="hero-buttons">
              <a href="#" className="hero-btn primary">
                Explore DigiTeach
                <i className="fa-solid fa-arrow-right ms-2" />
              </a>

              <a href="#" className="hero-btn outline">
                Get Involved
                <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" aria-hidden="true">
            <div className="hero-image-grid">
              <div className="hero-main-image">
                <img src="/assets/images/home-bg.png" alt="Students learning" />
              </div>

              <div className="hero-side-image">
                <img src="/assets/images/home-bg-R.png" alt="Students learning" />
              </div>

              <div className="hero-bottom-image">
                <img src="/assets/images/home-bg-Bottom.png" alt="Students learning" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROGRAMME CARD (NOW OUTSIDE HERO) */}
      <div className="programme-card-section container">
        <div className="programme-card">

          <div className="programme-left">
            <p className="programme-label">OUR FLAGSHIP PROGRAMME</p>
            <h2>DigiTeach</h2>
          </div>

          <div className="programme-middle">
            <p>
              Practical digital confidence for teachers — our flagship programme
              supporting educators to build digital confidence in classrooms and communities.
            </p>
          </div>

          <div className="programme-right">
            <a href="#" className="programme-btn">
              See what Teachers Learn
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

        </div>
      </div>
    </>
  )
}
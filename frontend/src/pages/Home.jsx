import Hero from '../components/Hero.jsx'

function AccessSection() {
  return (
    <section className="access-section">
      <div className="container">
        <div className="access-wrapper">
          <div className="access-images">
            <div className="teach-label">
              Each One <span>Teach</span> One
            </div>

            <div className="access-main-image">
              <img src="/assets/images/centre.png" alt="Student learning" />
            </div>

            <div className="access-top-image">
              <img
                src="/assets/images/top-right.png"
                alt="Teacher helping student"
              />
            </div>

            <div className="access-bottom-image">
              <img
                src="/assets/images/bottom-left.png"
                alt="Community learning"
              />
            </div>
          </div>

          <div className="access-content">
            <p className="access-subtitle">
              <i className="fa-solid fa-check" aria-hidden="true" />
              About the Initiative
            </p>

            <h2>
              Access is not enough. <br />
              The real goal is <br />
              confidence.
            </h2>

            <p>
              The Digital Confidence Initiative helps teachers and communities
              move from digital access to digital confidence — through
              practical training, online safety education and community-led
              support.
            </p>

            <div className="access-navigation">
              <a
                href="#"
                className="btn get-btn d-none d-lg-inline-flex"
              >
                Learn more <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ConfidenceSection() {
  return (
    <section className="confidence-section">
      <div className="container confidence-card">
        <div className="confidence-header">
          <div className="confidence-title">
            <p className="confidence-subtitle">
              <i className="fa-solid fa-check" aria-hidden="true" />
              What Teachers Learn
            </p>

            <h2>
              4 Practical Areas of <br />
              <span>Confidence</span>
            </h2>

            <p>
              Plain-language skills teachers can use the same day — in the
              classroom, in admin, and in everyday life.
            </p>
          </div>

          <a href="#" className="learn-more-btn">
            Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
        </div>

        <div className="confidence-grid">
          <div className="confidence-item">
            <div className="confidence-icon">
              <i className="fa-solid fa-computer" aria-hidden="true" />
            </div>
            <div className="confidence-badge">Area - 01</div>
            <h4>Digital Foundations</h4>
            <p>
              Computer basics, mouse and keyboard use, typing practice, files,
              folders, naming, saving, opening and finding documents.
            </p>
          </div>

          <div className="confidence-item">
            <div className="confidence-icon">
              <i className="fa-solid fa-globe" aria-hidden="true" />
            </div>
            <div className="confidence-badge">Area - 02</div>
            <h4>Internet, Email & Cloud</h4>
            <p>
              Browsers, Gmail, passwords, downloads, attachments, uploads and
              Google Drive.
            </p>
          </div>

          <div className="confidence-item">
            <div className="confidence-icon">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
            </div>
            <div className="confidence-badge">Area - 03</div>
            <h4>Teacher Productivity</h4>
            <p>
              Google Docs, Sheets, Slides and classroom tools for reports,
              attendance and teaching.
            </p>
          </div>

          <div className="confidence-item">
            <div className="confidence-icon">
              <i className="fa-solid fa-shield-halved" aria-hidden="true" />
            </div>
            <div className="confidence-badge">Area - 04</div>
            <h4>Digital Safety</h4>
            <p>
              Scams, phishing, fake links, misinformation, password hygiene and
              safer online behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="why-section">
      <div className="container">
        <p className="why-subtitle">
          <i className="fa-solid fa-check" aria-hidden="true" /> Why This Matters
        </p>

        <h2>
          Access is growing. <br />
          Confidence hasn’t kept pace
        </h2>

        <div className="why-grid">
          <div className="why-card dark-card">
            <h3>Access</h3>
            <p>
              Phones, devices, online services and platforms are everywhere — but
              they sit unused or feel risky.
            </p>
            <ul>
              <li>"I have a laptop but I'm afraid to touch it."</li>
              <li>"I can't tell which links are scams."</li>
              <li>"I lose files and forget passwords."</li>
            </ul>
          </div>

          <div className="why-arrow">
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </div>

          <div className="why-card green-card">
            <h3>Confidence</h3>
            <p>
              The same tools become practical, safe and independent — for teaching,
              work and everyday life.
            </p>
            <ul>
              <li>Prepares lesson notes and reports in Docs.</li>
              <li>Spots scams and stays safe online.</li>
              <li>Helps colleagues, learners and family.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HelpSection() {
  return (
    <section className="help-section">
      <div className="container">
        <div className="help-header">
          <p className="help-subtitle">
            <i className="fa-solid fa-hand-pointer" aria-hidden="true" />
            How to Get Involved
          </p>
          <h2>Find your way to help</h2>
          <p className="help-description">
            One simple form routes you to the right pathway — whoever you are.
          </p>
        </div>

        <div className="help-cards">
          <div className="help-card">
            <div className="help-card-image">
              <img
                src="/assets/images/join.png"
                alt="Join as a Teacher"
              />
            </div>
            <h3>Join as a Teacher</h3>
            <p>
              Participate in a future cohort or recommend it to your school
            </p>
            <a href="#" className="help-btn">
              Join Today
            </a>
          </div>

          <div className="help-card">
            <div className="help-card-image">
              <img
                src="/assets/images/help-host.jpg"
                alt="Host a Cohort"
              />
            </div>
            <h3>Host a Cohort</h3>
            <p>Offer a space, computers, internet and local coordination</p>
            <a href="#" className="help-btn">
              Start Hosting
            </a>
          </div>

          <div className="help-card">
            <div className="help-card-image">
              <img
                src="/assets/images/help-volunteer.jpg"
                alt="Volunteer"
              />
            </div>
            <h3>Volunteer as a Fellow</h3>
            <p>
              Support facilitation, curriculum safety content or documentation
            </p>
            <a href="#" className="help-btn">
              Join The Team
            </a>
          </div>

          <div className="help-card">
            <div className="help-card-image">
              <img
                src="/assets/images/help-partner.jpg"
                alt="Partner"
              />
            </div>
            <h3>Partner with Us</h3>
            <p>
              Support implementation, infrastructure research or funding
            </p>
            <a href="#" className="help-btn">
              Reach Out
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <AccessSection />
      <ConfidenceSection />
      <WhySection />
      <HelpSection />
    </div>
  )
}



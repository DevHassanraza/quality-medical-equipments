import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Medical Equipment",
    text: "Reliable equipment solutions for hospitals, clinics, laboratories and healthcare facilities.",
  },
  {
    number: "02",
    title: "Biomedical Support",
    text: "Professional maintenance, installation and technical support for medical equipment.",
  },
  {
    number: "03",
    title: "Hospital Infrastructure",
    text: "Planning, medical gas systems, hospital furniture and complete healthcare facility solutions.",
  },
  {
    number: "04",
    title: "Digital Healthcare",
    text: "Modern HIMS, PACS and healthcare technology solutions for efficient hospital operations.",
  },
];

const whyChoose = [
  {
    icon: "✓",
    title: "Quality Focused",
    text: "We prioritize dependable solutions designed for demanding healthcare environments.",
  },
  {
    icon: "↗",
    title: "Complete Solutions",
    text: "From equipment supply to hospital planning, we support healthcare projects from start to finish.",
  },
  {
    icon: "⚙",
    title: "Technical Expertise",
    text: "Our approach combines healthcare knowledge with biomedical and technical understanding.",
  },
  {
    icon: "◎",
    title: "Reliable Support",
    text: "We believe long-term service and professional support are as important as the initial supply.",
  },
];

export default function About() {
  return (
    <>
      {/* ======================================
          ABOUT HERO
      ====================================== */}

      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="about-hero-container">
          <div
            className="about-hero-content"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <span className="about-eyebrow">
              ABOUT QUALITY MEDICAL
            </span>

            <h1>
              Building Better Healthcare Through
              <span> Quality, Technology & Trust.</span>
            </h1>

            <p>
              We deliver medical equipment, biomedical services,
              hospital infrastructure and healthcare technology solutions
              designed to support better patient care.
            </p>

            <div
              className="about-breadcrumb"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <Link href="/">Home</Link>
              <span>→</span>
              <strong>About Us</strong>
            </div>
          </div>
        </div>

        <div className="about-hero-shape about-shape-one" />
        <div className="about-hero-shape about-shape-two" />
      </section>

      {/* ======================================
          WHO WE ARE
      ====================================== */}

      <section className="about-intro">
        <div className="about-section-container">
          <div className="about-intro-grid">
            <div
              className="about-intro-visual"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="about-main-image">
                <img
                  src="/images/services/service-1.png"
                  alt="Quality Medical healthcare consultancy and solutions"
                />

                <div className="about-image-badge">
                  <span>Healthcare</span>
                  <strong>Solutions Partner</strong>
                </div>
              </div>

              <div className="about-image-accent" />
            </div>

            <div
              className="about-intro-content"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <span className="about-section-label">
                WHO WE ARE
              </span>

              <h2>
                More Than a Supplier.
                <span> A Healthcare Solutions Partner.</span>
              </h2>

              <p className="about-lead">
                Quality Medical Equipments is focused on helping healthcare
                facilities access reliable equipment, professional technical
                support and integrated medical solutions.
              </p>

              <p>
                Our services cover multiple areas of healthcare development,
                including medical equipment, biomedical engineering, hospital
                furniture, medical gas systems, healthcare consultancy and
                digital hospital solutions.
              </p>

              <p>
                We aim to build long-term relationships by understanding each
                facility&apos;s needs and providing practical solutions that
                support efficient operations and better healthcare delivery.
              </p>

              <div className="about-small-features">
                <div
                  className="about-small-feature"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span>01</span>

                  <div>
                    <strong>Professional Approach</strong>
                    <p>
                      Solutions planned around healthcare requirements.
                    </p>
                  </div>
                </div>

                <div
                  className="about-small-feature"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span>02</span>

                  <div>
                    <strong>Long-Term Support</strong>
                    <p>
                      Focused on reliability beyond project completion.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="about-contact-btn"
                data-aos="fade-up"
                data-aos-delay="260"
              >
                Talk to Our Team
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          CAPABILITIES
      ====================================== */}

      <section className="about-capabilities">
        <div className="about-section-container">
          <div
            className="about-centered-heading"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <span className="about-section-label">
              WHAT WE DELIVER
            </span>

            <h2>
              Complete Healthcare Solutions
              <span> Under One Roof.</span>
            </h2>

            <p>
              Our expertise connects medical equipment, infrastructure,
              technology and technical services into one dependable solution.
            </p>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((item, index) => (
              <div
                className="about-capability-card"
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="about-capability-top">
                  <span>{item.number}</span>

                  <div className="about-capability-line" />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="about-capability-arrow">
                  ↗
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          MISSION + VISION
      ====================================== */}

      <section className="about-mission-section">
        <div className="about-section-container">
          <div className="about-mission-grid">
            <div
              className="about-mission-intro"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <span className="about-section-label">
                OUR PURPOSE
              </span>

              <h2>
                Driven by Better Healthcare.
                <span> Guided by Reliability.</span>
              </h2>

              <p>
                Our purpose is to contribute to healthcare environments where
                medical professionals have the equipment, infrastructure and
                technology they need to provide better care.
              </p>

              <div
                className="about-purpose-mark"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <span>QM</span>
              </div>
            </div>

            <div className="about-mission-cards">
              <article
                className="about-mission-card"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="850"
              >
                <div className="mission-card-number">
                  01
                </div>

                <span className="mission-card-label">
                  OUR MISSION
                </span>

                <h3>
                  Deliver Solutions Healthcare Teams Can Depend On.
                </h3>

                <p>
                  To provide reliable medical equipment, healthcare technology
                  and professional services with a strong focus on quality,
                  practical value and long-term support.
                </p>
              </article>

              <article
                className="about-mission-card vision"
                data-aos="fade-up"
                data-aos-delay="220"
                data-aos-duration="850"
              >
                <div className="mission-card-number">
                  02
                </div>

                <span className="mission-card-label">
                  OUR VISION
                </span>

                <h3>
                  Become a Trusted Partner in Modern Healthcare.
                </h3>

                <p>
                  To grow as a dependable healthcare solutions company known
                  for technical capability, professional service and meaningful
                  contributions to healthcare development.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          WHY CHOOSE US
      ====================================== */}

      <section className="about-why">
        <div className="about-section-container">
          <div className="about-why-grid">
            <div
              className="about-why-heading"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <span className="about-section-label">
                WHY QUALITY MEDICAL
              </span>

              <h2>
                Built Around the Needs of
                <span> Modern Healthcare.</span>
              </h2>

              <p>
                Every healthcare project is different. Our approach is based
                on understanding the requirement first and then delivering a
                practical, dependable solution.
              </p>

              <Link
                href="/services"
                className="about-outline-btn"
                data-aos="fade-up"
                data-aos-delay="180"
              >
                Explore Our Services
                <span>→</span>
              </Link>
            </div>

            <div className="about-why-cards">
              {whyChoose.map((item, index) => (
                <article
                  className="about-why-card"
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <div className="about-why-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
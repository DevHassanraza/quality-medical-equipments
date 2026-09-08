import Link from "next/link";

const services = [
  {
    number: "01",
    tag: "HEALTHCARE CONSULTANCY",
    title: "Healthcare Commission Consultancy",
    description:
      "Professional support for hospitals, clinics, laboratories and diagnostic centers to meet healthcare commission requirements and maintain operational compliance.",
    image: "/images/services/service-1.png",
    items: [
      "Healthcare Facility Registration",
      "Provisional Licensing Support",
      "Regular Licensing Assistance",
      "Compliance Documentation",
      "Biomedical Engineering MOU",
      "Facility Inspection Preparation",
    ],
  },
  {
    number: "02",
    tag: "MEDICAL EQUIPMENT",
    title: "Medical Equipment Sale & Services",
    description:
      "Reliable supply, installation, repair and maintenance support for medical and biomedical equipment used across modern healthcare facilities.",
    image: "/images/services/service-2.png",
    items: [
      "Operation Theatre Equipment",
      "Ultrasound Machines",
      "ICU & NICU Equipment",
      "Dialysis Machines",
      "Laboratory Equipment",
      "Biomedical Maintenance",
    ],
  },
  {
    number: "03",
    tag: "HOSPITAL FURNITURE",
    title: "Hospital & Medical Furniture",
    description:
      "Practical and durable medical furniture designed around patient comfort, clinical workflow and the everyday needs of healthcare professionals.",
    image: "/images/services/service-3.png",
    items: [
      "Hospital & Patient Beds",
      "Bedside Cabinets",
      "Medical Trolleys",
      "Examination Couches",
      "Stretchers & Wheelchairs",
      "Operation Theatre Furniture",
    ],
  },
  {
    number: "04",
    tag: "SURGICAL SUPPLIES",
    title: "Surgical Instruments & Medical Disposables",
    description:
      "Quality surgical instruments and medical consumables for operating rooms, clinics, laboratories and routine healthcare procedures.",
    image: "/images/services/service-4.png",
    items: [
      "General Surgery Sets",
      "Gynecology Instrument Sets",
      "Specialty Surgical Instruments",
      "Sterilization Products",
      "Clinical Consumables",
      "Medical Disposables",
    ],
  },
  {
    number: "05",
    tag: "MEDICAL GAS SYSTEMS",
    title: "Medical Gases Pipeline System",
    description:
      "Complete medical gas pipeline planning, installation and support for hospitals and healthcare facilities with a strong focus on safety and reliability.",
    image: "/images/services/service-5.png",
    items: [
      "Medical Gas Pipeline Installation",
      "Cylinder Manifold Systems",
      "Bed Head Units",
      "Medical Air Compressors",
      "Flow Meters & Suction Units",
      "Medical Gas Accessories",
    ],
  },
  {
    number: "06",
    tag: "DIGITAL HEALTHCARE",
    title: "Hospital Information Management & PACS",
    description:
      "Integrated HIMS and PACS solutions designed to improve hospital workflow, patient management, reporting and digital healthcare operations.",
    image: "/images/services/service-6.png",
    items: [
      "OPD Management",
      "IPD Management",
      "Laboratory Management",
      "Pharmacy Management",
      "Radiology Management",
      "PACS Integration",
    ],
  },
  {
    number: "07",
    tag: "HOSPITAL DEVELOPMENT",
    title: "Hospital Planning, Design & Construction Consultancy",
    description:
      "End-to-end consultancy for healthcare facility planning, infrastructure development, equipment planning and project commissioning.",
    image: "/images/services/service-7.png",
    items: [
      "Feasibility & Needs Assessment",
      "Architectural Planning",
      "MEP Design Coordination",
      "Medical Equipment Planning",
      "Medical Gas Planning",
      "Project Management & Commissioning",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We first understand your facility, requirements, budget and operational goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Our team prepares a practical solution based on your healthcare and technical requirements.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "We coordinate supply, installation, implementation and project execution.",
  },
  {
    number: "04",
    title: "Support",
    text: "We continue to provide technical assistance and long-term professional support.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Healthcare Focused",
    text: "Solutions developed specifically around hospitals, clinics and healthcare facilities.",
  },
  {
    number: "02",
    title: "Complete Solutions",
    text: "Equipment, infrastructure, consultancy and technology available through one dependable partner.",
  },
  {
    number: "03",
    title: "Technical Expertise",
    text: "Practical support backed by biomedical, healthcare and project understanding.",
  },
  {
    number: "04",
    title: "Long-Term Support",
    text: "Our approach continues beyond supply with service, maintenance and technical assistance.",
  },
];

export default function Services() {
  return (
    <>
      {/* SERVICES HERO */}
      <section className="services-page-hero">
        <div className="services-page-hero-overlay" />

        <div className="services-page-container">
          <div
            className="services-page-hero-content"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <span className="services-page-eyebrow">
              OUR SERVICES
            </span>

            <h1>
              Complete Healthcare Solutions
              <span> Built Around Your Needs.</span>
            </h1>

            <p>
              From medical equipment and hospital infrastructure to
              consultancy, biomedical support and digital healthcare,
              we provide dependable solutions for modern healthcare facilities.
            </p>

            <div
              className="services-page-hero-actions"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <a
                href="#services-list"
                className="services-page-primary-btn"
              >
                Explore Services
                <span>↓</span>
              </a>

              <Link
                href="/contact"
                className="services-page-secondary-btn"
              >
                Discuss Your Project
                <span>→</span>
              </Link>
            </div>

            <div
              className="services-page-breadcrumb"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Link href="/">Home</Link>
              <span>→</span>
              <strong>Services</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-page-intro">
        <div className="services-page-container">
          <div className="services-page-intro-grid">

            <div
              className="services-page-intro-heading"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <span className="services-page-label">
                WHAT WE DO
              </span>

              <h2>
                One Partner for
                <span> Complete Healthcare Solutions.</span>
              </h2>
            </div>

            <div
              className="services-page-intro-content"
              data-aos="fade-left"
              data-aos-duration="850"
            >
              <p>
                Healthcare facilities require more than individual products.
                They need equipment, infrastructure, technology and professional
                support that work together.
              </p>

              <p>
                Quality Medical Equipments brings these services together to
                help hospitals, clinics and healthcare organizations manage
                projects with greater confidence and efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section
        className="services-page-list-section"
        id="services-list"
      >
        <div className="services-page-container">

          <div
            className="services-page-centered-heading"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <span className="services-page-label">
              OUR SPECIALIZED SERVICES
            </span>

            <h2>
              Expertise Across Every Stage of
              <span> Healthcare Development.</span>
            </h2>

            <p>
              Explore our major service areas designed for hospitals,
              clinics, laboratories and healthcare projects.
            </p>
          </div>

          <div className="services-page-list">
            {services.map((service, index) => (
              <article
                className={`services-page-service ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
                key={service.number}
              >

                <div
                  className="services-page-service-image"
                  data-aos={
                    index % 2 === 0 ? "fade-right" : "fade-left"
                  }
                  data-aos-duration="900"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="services-page-service-number">
                    {service.number}
                  </div>
                </div>

                <div
                  className="services-page-service-content"
                  data-aos={
                    index % 2 === 0 ? "fade-left" : "fade-right"
                  }
                  data-aos-duration="900"
                >
                  <span className="services-page-service-tag">
                    {service.tag}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p className="services-page-service-description">
                    {service.description}
                  </p>

                  <div className="services-page-service-items">
                    {service.items.map((item) => (
                      <div
                        className="services-page-service-item"
                        key={item}
                      >
                        <span>✓</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="services-page-service-btn"
                  >
                    Discuss This Service
                    <span>→</span>
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="services-page-process">
        <div className="services-page-container">

          <div className="services-page-process-top">

            <div
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <span className="services-page-label light">
                HOW WE WORK
              </span>

              <h2>
                A Clear Process From
                <span> Requirement to Delivery.</span>
              </h2>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="850"
            >
              Every healthcare project is different. Our process keeps the
              work structured, practical and focused on your facility&apos;s
              actual requirements.
            </p>

          </div>

          <div className="services-page-process-grid">
            {process.map((item, index) => (
              <article
                className="services-page-process-card"
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <span className="services-page-process-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="services-page-benefits">
        <div className="services-page-container">

          <div className="services-page-benefits-grid">

            <div
              className="services-page-benefits-heading"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <span className="services-page-label">
                WHY QUALITY MEDICAL
              </span>

              <h2>
                More Than a Service Provider.
                <span> A Healthcare Partner.</span>
              </h2>

              <p>
                We focus on understanding the requirement first and then
                delivering healthcare solutions that are practical,
                reliable and supported for the long term.
              </p>

              <Link
                href="/about"
                className="services-page-outline-btn"
              >
                Learn About Us
                <span>→</span>
              </Link>
            </div>

            <div className="services-page-benefits-cards">
              {benefits.map((item, index) => (
                <article
                  className="services-page-benefit-card"
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  data-aos-duration="800"
                >
                  <div className="services-page-benefit-number">
                    {item.number}
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

      {/* FINAL CTA */}
      <section className="services-page-final">
        <div className="services-page-container">

          <div
            className="services-page-final-inner"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <div>
              <span>LET&apos;S DISCUSS YOUR REQUIREMENT</span>

              <h2>
                Planning a Healthcare Project?
                Let&apos;s Build the Right Solution.
              </h2>

              <p>
                Share your requirements with our team and we&apos;ll help you
                identify the right healthcare, equipment or infrastructure
                solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="services-page-final-btn"
            >
              Start a Conversation
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
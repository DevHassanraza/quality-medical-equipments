"use client";


import { FormEvent, useState } from "react";
import Link from "next/link";

const contactItems = [
  {
    icon: "☎",
    title: "Call Us",
    value: "+92 335 0521234",
    href: "tel:+92 335 0521234",
  },
  {
    icon: "✉",
    title: "Email Us",
    value: "info@qualitymedical.com",
    href: "mailto:info@qualitymedical.com",
  },
  {
    icon: "◉",
    title: "Visit Us",
    value: "Pakistan",
    href: "#",
  },
  {
    icon: "◷",
    title: "Working Hours",
    value: "Monday - Saturday",
    href: "#",
  },
];

const services = [
  "Medical Equipment",
  "Hospital Furniture",
  "Healthcare Consultancy",
  "Medical Gas Pipeline",
  "Surgical Instruments",
  "Medical Disposables",
  "HIMS & PACS",
  "Hospital Planning & Construction",
  "Biomedical Support",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    event.currentTarget.reset();
  };

  return (
    <>
      {/* CONTACT HERO */}
      <section className="contact-page-hero">
        <div className="contact-page-hero-overlay" />

        <div className="contact-page-container">
          <div
            className="contact-page-hero-content"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <span className="contact-page-eyebrow">
              CONTACT QUALITY MEDICAL
            </span>

            <h1>
              Let&apos;s Talk About Your
              <span> Healthcare Requirements.</span>
            </h1>

            <p>
              Whether you need medical equipment, hospital infrastructure,
              biomedical support or healthcare technology, our team is ready
              to understand your requirement and guide you toward the right
              solution.
            </p>

            <div
              className="contact-page-breadcrumb"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <Link href="/">Home</Link>
              <span>→</span>
              <strong>Contact Us</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INTRO */}
      <section className="contact-page-intro">
        <div className="contact-page-container">
          <div className="contact-page-intro-grid">

            <div
              className="contact-page-intro-heading"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <span className="contact-page-label">
                GET IN TOUCH
              </span>

              <h2>
                Start the Conversation.
                <span> We&apos;ll Help With the Next Step.</span>
              </h2>
            </div>

            <div
              className="contact-page-intro-copy"
              data-aos="fade-left"
              data-aos-duration="850"
            >
              <p>
                Share your medical equipment, hospital development or
                healthcare service requirement with our team.
              </p>

              <p>
                We&apos;ll review your request and help you identify a practical
                solution based on your facility and project needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-page-main">
        <div className="contact-page-container">

          <div className="contact-page-main-grid">

            {/* LEFT SIDE */}
            <div
              className="contact-page-info"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <span className="contact-page-label">
                CONTACT INFORMATION
              </span>

              <h2>
                Reliable Support Starts With
                <span> Clear Communication.</span>
              </h2>

              <p className="contact-page-info-description">
                Reach out to discuss product availability, quotations,
                technical requirements, healthcare projects or service
                support.
              </p>

              <div className="contact-page-info-list">
                {contactItems.map((item, index) => (
                  <div
                    className="contact-page-info-card"
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 90}
                    data-aos-duration="750"
                  >
                    <div className="contact-page-info-icon">
                      {item.icon}
                    </div>

                    <div>
                      <span>{item.title}</span>

                      {item.href !== "#" ? (
                        <a href={item.href}>
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-page-support-box">
                <div className="contact-page-support-mark">
                  ✦
                </div>

                <div>
                  <span>NEED QUICK GUIDANCE?</span>

                  <h3>
                    Tell Us What You Need.
                  </h3>

                  <p>
                    Our team can help you choose the right equipment,
                    service or healthcare solution for your requirement.
                  </p>
                </div>
              </div>
            </div>

            {/* FORM SIDE */}
            <div
              id="quote-form"
              className="contact-page-form-wrap"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <div className="contact-page-form-top">
                <span>REQUEST A QUOTE</span>

                <h2>
                  Send Your Requirement
                </h2>

                <p>
                  Fill in the form below and our team will get back to you.
                </p>
              </div>

              <form
                className="contact-page-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-page-form-grid">

                  <div className="contact-page-field">
                    <label htmlFor="fullName">
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="contact-page-field">
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+92 335 0521234"
                      required
                    />
                  </div>

                  <div className="contact-page-field">
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="contact-page-field">
                    <label htmlFor="organization">
                      Hospital / Company
                    </label>

                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="Organization name"
                    />
                  </div>

                  <div className="contact-page-field contact-page-field-full">
                    <label htmlFor="service">
                      Service Required <span>*</span>
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option
                          value={service}
                          key={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-page-field contact-page-field-full">
                    <label htmlFor="message">
                      Your Requirement <span>*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about the equipment, service or healthcare project you need..."
                      required
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="contact-page-submit"
                >
                  <span>
                    Send Requirement
                  </span>

                  <span>
                    →
                  </span>
                </button>

                {submitted && (
                  <div className="contact-page-success">
                    ✓ Thank you. Your form has been submitted successfully.
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="contact-page-process">
        <div className="contact-page-container">

          <div
            className="contact-page-process-heading"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <span className="contact-page-label light">
              WHAT HAPPENS NEXT
            </span>

            <h2>
              Simple Communication.
              <span> Clear Next Steps.</span>
            </h2>
          </div>

          <div className="contact-page-process-grid">

            <div
              className="contact-page-process-card"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span>01</span>
              <h3>Send Requirement</h3>
              <p>
                Tell us what equipment, service or solution your facility needs.
              </p>
            </div>

            <div
              className="contact-page-process-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span>02</span>
              <h3>Requirement Review</h3>
              <p>
                Our team reviews your requirement and identifies the suitable approach.
              </p>
            </div>

            <div
              className="contact-page-process-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span>03</span>
              <h3>Solution & Quote</h3>
              <p>
                We communicate the recommended solution, scope and quotation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-page-final">
        <div className="contact-page-container">

          <div
            className="contact-page-final-inner"
            data-aos="zoom-in"
            data-aos-duration="850"
          >
            <span>
              QUALITY MEDICAL EQUIPMENTS
            </span>

            <h2>
              Building Better Healthcare Starts With the Right Partner.
            </h2>

            <p>
              Let&apos;s discuss how we can support your medical equipment,
              hospital infrastructure or healthcare technology requirements.
            </p>

            <a
              href="tel:+92XXXXXXXXXX"
              className="contact-page-final-btn"
            >
              Call Our Team
              <span>→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
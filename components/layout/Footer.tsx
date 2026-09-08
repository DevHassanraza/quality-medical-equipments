import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* CTA STRIP */}
      <section className="footer-cta">
        <div
          className="footer-cta-container"
          data-aos="fade-up"
          data-aos-duration="850"
        >

          <div
            className="footer-cta-icon"
            data-aos="zoom-in"
            data-aos-delay="80"
          >
            ✦
          </div>

          <div
            className="footer-cta-content"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            <span className="footer-cta-small">
              LET&apos;S WORK TOGETHER
            </span>

            <h2>
              Ready to Equip Your Healthcare Facility With Confidence?
            </h2>

            <p>
              Talk to our team for reliable medical equipment,
              hospital solutions and professional support.
            </p>
          </div>

          <Link
            href="/contact#quote-form"
            className="footer-cta-btn"
            data-aos="fade-left"
            data-aos-delay="220"
          >
            <span>Get a Free Quote</span>
            <span className="footer-cta-arrow">→</span>
          </Link>

        </div>
      </section>


      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">

          {/* COMPANY */}
          <div
            className="footer-column footer-company"
            data-aos="fade-up"
            data-aos-duration="800"
          >

            <Link href="/" className="footer-logo-wrap">
              <img
                src="/logos/quality-medical-logo.jpeg"
                alt="Quality Medical Equipments"
                className="footer-logo"
              />
            </Link>

            <p>
              Quality Medical Equipments provides dependable
              medical equipment, biomedical services, hospital
              infrastructure and healthcare technology solutions
              for modern healthcare facilities.
            </p>

            <div className="footer-socials">

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >

            <h3>Quick Links</h3>

            <div className="footer-links">

              <Link href="/">
                Home
              </Link>

              <Link href="/about">
                About Us
              </Link>

              <Link href="/products">
                Products
              </Link>

              <Link href="/services">
                Services
              </Link>

              <Link href="/contact">
                Contact Us
              </Link>

            </div>

          </div>


          {/* SERVICES */}
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="180"
            data-aos-duration="800"
          >

            <h3>Our Services</h3>

            <div className="footer-links">

              <Link href="/services">
                Medical Equipment
              </Link>

              <Link href="/services">
                Hospital Furniture
              </Link>

              <Link href="/services">
                Medical Gas Systems
              </Link>

              <Link href="/services">
                Healthcare Consultancy
              </Link>

              <Link href="/services">
                HIMS & PACS
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div
            className="footer-column footer-contact"
            data-aos="fade-up"
            data-aos-delay="260"
            data-aos-duration="800"
          >

            <h3>Get In Touch</h3>

            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                ☎
              </div>

              <div>
                <span>Call Us</span>
                <a href="tel:+923350521234">
                  +92 335 0521234
                </a>
              </div>

            </div>


            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                ✉
              </div>

              <div>
                <span>Email Us</span>
                <a href="mailto:info@qualitymedical.com">
                  info@qualitymedical.com
                </a>
              </div>

            </div>


            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                ◉
              </div>

              <div>
                <span>Location</span>
                <p>
                  Ghori Town Phase 5, Street 14/B, Islamabad
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © 2026 Quality Medical Equipments.
            All Rights Reserved.
          </p>

          <p>
            Developed by{" "}
            <a
              href="https://softwayhub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoftwayHub
            </a>
          </p>

          <div>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
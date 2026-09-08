import Link from "next/link";

const productCategories = [
  {
    number: "01",
    image: "/images/services/service-2.png",
    title: "Medical Equipment",
    description:
      "Reliable medical and biomedical equipment for hospitals, clinics and healthcare facilities.",
    items: [
      "Operation Theatre Equipment",
      "Patient Monitoring Systems",
      "Diagnostic Equipment",
    ],
  },
  {
    number: "02",
    image: "/images/services/service-3.png",
    title: "Hospital Furniture",
    description:
      "Durable and practical medical furniture designed for modern healthcare environments.",
    items: [
      "Hospital Beds",
      "Patient Trolleys",
      "Examination & OT Furniture",
    ],
  },
  {
    number: "03",
    image: "/images/services/service-4.png",
    title: "Surgical Instruments",
    description:
      "Professional surgical instruments for general surgery and specialist medical procedures.",
    items: [
      "General Surgery Sets",
      "Gynecology Instruments",
      "Specialty Instrument Sets",
    ],
  },
  {
    number: "04",
    image: "/images/services/service-4.png",
    title: "Medical Disposables",
    description:
      "Essential medical consumables and disposable products for everyday clinical operations.",
    items: [
      "Clinical Consumables",
      "Ultrasound Accessories",
      "Sterilization Supplies",
    ],
  },
  {
    number: "05",
    image: "/images/services/service-2.png",
    title: "Laboratory Equipment",
    description:
      "Laboratory equipment and supporting solutions for diagnostic and healthcare laboratories.",
    items: [
      "Laboratory Machines",
      "Blood Bank Equipment",
      "Testing Solutions",
    ],
  },
  {
    number: "06",
    image: "/images/hero/hero-2.webp",
    title: "ICU & NICU Equipment",
    description:
      "Critical care equipment developed to support intensive and neonatal healthcare environments.",
    items: [
      "Ventilation Equipment",
      "Patient Monitoring",
      "NICU Solutions",
    ],
  },
  {
    number: "07",
    image: "/images/services/service-5.png",
    title: "Medical Gas Equipment",
    description:
      "Equipment and accessories for safe and reliable medical gas distribution systems.",
    items: [
      "Flow Meters",
      "Suction Units",
      "Medical Gas Accessories",
    ],
  },
  {
    number: "08",
    image: "/images/services/service-2.png",
    title: "Dialysis Equipment",
    description:
      "Dependable dialysis equipment and water treatment solutions for renal care facilities.",
    items: [
      "Dialysis Machines",
      "RO Plants",
      "Supporting Equipment",
    ],
  },
];

const sourcingBenefits = [
  {
    number: "01",
    title: "Quality Focused",
    text: "Products selected with healthcare reliability, performance and practical use in mind.",
  },
  {
    number: "02",
    title: "Complete Range",
    text: "Multiple categories of medical equipment and healthcare products from one dependable source.",
  },
  {
    number: "03",
    title: "Technical Support",
    text: "Professional assistance for equipment selection, installation and ongoing technical requirements.",
  },
  {
    number: "04",
    title: "Reliable Supply",
    text: "A solution-focused approach designed around the operational needs of healthcare facilities.",
  },
];

export default function Products() {
  return (
    <>
      {/* ======================================
          PRODUCTS HERO
      ====================================== */}

      <section className="products-hero">
        <div className="products-hero-overlay" />

        <div className="products-hero-container">
          <div
            className="products-hero-content"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <span className="products-eyebrow">OUR PRODUCTS</span>

            <h1>
              Reliable Medical Products for
              <span> Modern Healthcare.</span>
            </h1>

            <p>
              From essential hospital equipment to advanced biomedical
              solutions, we provide dependable products designed to support
              safe, efficient and modern healthcare environments.
            </p>

            <div
              className="products-hero-actions"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <a href="#product-categories" className="products-primary-btn">
                Explore Products
                <span>↓</span>
              </a>

              <Link href="/contact" className="products-secondary-btn">
                Request a Quote
                <span>→</span>
              </Link>
            </div>

            <div
              className="products-breadcrumb"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Link href="/">Home</Link>
              <span>→</span>
              <strong>Products</strong>
            </div>
          </div>
        </div>

        <div className="products-hero-accent products-accent-one" />
        <div className="products-hero-accent products-accent-two" />
      </section>

      {/* ======================================
          INTRO STRIP
      ====================================== */}

      <section className="products-intro-strip">
        <div className="products-section-container">
          <div className="products-intro-grid">
            <div
              className="products-intro-title"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <span>QUALITY MEDICAL EQUIPMENTS</span>

              <h2>
                Products Built Around
                <strong> Healthcare Needs.</strong>
              </h2>
            </div>

            <div
              className="products-intro-copy"
              data-aos="fade-left"
              data-aos-duration="850"
            >
              <p>
                We support healthcare facilities with medical equipment,
                hospital furniture, surgical products, critical care solutions
                and essential clinical supplies.
              </p>

              <p>
                Our focus is not simply supplying a product. We aim to help
                healthcare teams choose practical solutions that match their
                facility, workflow and technical requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          PRODUCT CATEGORIES
      ====================================== */}

      <section
        className="product-categories-section"
        id="product-categories"
      >
        <div className="products-section-container">
          <div
            className="products-centered-heading"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <span className="products-section-label">
              PRODUCT CATEGORIES
            </span>

            <h2>
              Complete Medical Product
              <span> Solutions Under One Roof.</span>
            </h2>

            <p>
              Explore our product categories for hospitals, clinics,
              laboratories and healthcare projects.
            </p>
          </div>

          <div className="product-category-grid">
            {productCategories.map((product, index) => (
              <article
                className="product-category-card"
                key={product.number}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                data-aos-duration="800"
              >
                <div className="product-category-image">
                  <img src={product.image} alt={product.title} />

                  <div className="product-category-number">
                    {product.number}
                  </div>

                  <div className="product-category-image-overlay" />
                </div>

                <div className="product-category-content">
                  <span className="product-card-label">
                    QUALITY MEDICAL
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <div className="product-card-items">
                    {product.items.map((item) => (
                      <div className="product-card-item" key={item}>
                        <span>✓</span>
                        <strong>{item}</strong>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="product-card-link">
                    Request Details
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          FEATURED SOLUTION
      ====================================== */}

      <section className="products-featured">
        <div className="products-section-container">
          <div className="products-featured-card">
            <div
              className="products-featured-image"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <img
                src="/images/services/service-2.png"
                alt="Medical equipment solutions"
              />

              <div className="products-featured-badge">
                <span>Medical</span>
                <strong>Equipment Solutions</strong>
              </div>
            </div>

            <div
              className="products-featured-content"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <span className="products-section-label">
                FEATURED SOLUTION
              </span>

              <h2>
                From Equipment Selection to
                <span> Technical Support.</span>
              </h2>

              <p>
                Choosing medical equipment requires more than comparing
                specifications. The equipment must match the clinical
                requirement, available infrastructure and long-term
                operational needs.
              </p>

              <div className="products-featured-points">
                <div data-aos="fade-up" data-aos-delay="100">
                  <span>01</span>
                  <p>Product selection based on healthcare requirements.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="180">
                  <span>02</span>
                  <p>Installation and technical guidance where required.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="260">
                  <span>03</span>
                  <p>Support for healthcare projects and facility planning.</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="products-featured-btn"
                data-aos="fade-up"
                data-aos-delay="320"
              >
                Discuss Your Requirement
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          WHY SOURCE FROM US
      ====================================== */}

      <section className="products-benefits">
        <div className="products-section-container">
          <div className="products-benefits-grid">
            <div
              className="products-benefits-heading"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <span className="products-section-label">
                WHY QUALITY MEDICAL
              </span>

              <h2>
                A Dependable Source for
                <span> Healthcare Products.</span>
              </h2>

              <p>
                We understand that healthcare products directly affect
                clinical workflows and patient care. That is why reliability,
                product suitability and support remain central to our approach.
              </p>

              <Link href="/about" className="products-outline-btn">
                Learn About Us
                <span>→</span>
              </Link>
            </div>

            <div className="products-benefit-cards">
              {sourcingBenefits.map((benefit, index) => (
                <article
                  className="products-benefit-card"
                  key={benefit.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <div className="products-benefit-number">
                    {benefit.number}
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          FINAL PRODUCT CTA
      ====================================== */}

      <section className="products-final-cta">
        <div className="products-section-container">
          <div
            className="products-final-cta-inner"
            data-aos="zoom-in"
            data-aos-duration="850"
          >
            <div>
              <span>NEED A SPECIFIC PRODUCT?</span>

              <h2>
                Tell Us What Your Healthcare
                Facility Needs.
              </h2>

              <p>
                Share your medical equipment or product requirements with our
                team and we&apos;ll help you find the right solution.
              </p>
            </div>

            <Link href="/contact" className="products-final-btn">
              Send Your Requirement
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
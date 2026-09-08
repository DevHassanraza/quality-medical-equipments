"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  {
    image: "/images/services/service-1.png",
    tag: "HEALTHCARE CONSULTANCY",
    title: "Healthcare Commission Consultancy",
    description:
      "Our experienced healthcare management team helps hospitals, laboratories, radiology centers, dialysis centers and clinics meet healthcare commission standards.",
    points: [
      "Registration",
      "Provisional License",
      "Regular License",
      "Biomedical Engineering Services MOU",
    ],
  },
  {
    image: "/images/services/service-2.png",
    tag: "MEDICAL EQUIPMENT",
    title: "Medical Equipment Sale & Services",
    description:
      "We provide new and refurbished medical equipment along with reliable repair, maintenance and annual service support.",
    points: [
      "Operation Theatre Equipment",
      "Ultrasound Machines",
      "NICU Equipment",
      "Dialysis Machines & RO Plants",
      "Laboratory & Blood Bank Equipment",
      "Biomedical Equipment Maintenance",
    ],
  },
  {
    image: "/images/services/service-3.png",
    tag: "HOSPITAL FURNITURE",
    title: "Hospital & Medical Furniture",
    description:
      "Durable, reliable and practical medical furniture designed to support modern healthcare environments.",
    points: [
      "Patient Beds",
      "Bedside Cabinets & Over-bed Tables",
      "Medicine & Instrument Trolleys",
      "Patient Couches & Delivery Tables",
      "Stretchers & Wheelchairs",
      "OT Furniture & Surgical Doors",
    ],
  },
  {
    image: "/images/services/service-4.png",
    tag: "SURGICAL SUPPLIES",
    title: "Surgical Instruments & Medical Disposables",
    description:
      "Quality surgical instruments and essential medical consumables for hospitals, clinics and healthcare professionals.",
    points: [
      "General Surgery Instrument Sets",
      "Gynecology Instrument Sets",
      "Ultrasound Printer Paper",
      "Diathermy Leads",
      "Autoclave Strips & Tape",
      "Ultrasound Gel & Disposables",
    ],
  },
  {
    image: "/images/services/service-5.png",
    tag: "MEDICAL GAS SYSTEMS",
    title: "Medical Gases Pipeline System",
    description:
      "Complete medical gas pipeline solutions designed for safe, reliable and uninterrupted gas supply in healthcare facilities.",
    points: [
      "Cylinder Manifold Installation",
      "Medical Gas Pipeline Installation",
      "Bed Head Unit Installation",
      "Medical Air Compressor Installation",
      "Flow Meter & Suction Unit Supply",
      "Medical Gas Cylinder Supply",
    ],
  },
  {
    image: "/images/services/service-6.png",
    tag: "DIGITAL HEALTHCARE",
    title: "Hospital Information Management & PACS System",
    description:
      "Advanced HIMS and PACS solutions designed to streamline hospital operations and improve digital healthcare management.",
    points: [
      "Out Patient Department (OPD)",
      "In Patient Department (IPD)",
      "Laboratory Services",
      "Pharmacy Services",
      "Radiology Services",
      "Radiology PACS Solutions",
    ],
  },
  {
    image: "/images/services/service-7.png",
    tag: "HOSPITAL DEVELOPMENT",
    title: "Hospital Planning, Design & Construction Consultancy",
    description:
      "Complete hospital planning and project management support from feasibility study to commissioning.",
    points: [
      "Feasibility Studies & Need Analysis",
      "Architectural & Functional Planning",
      "Mechanical, Electrical & Plumbing Design",
      "Fire Safety & IT Infrastructure",
      "Medical Gas Pipeline Planning",
      "Medical Equipment Planning & Procurement",
      "Project Management & Commissioning",
    ],
  },
];

export default function ServicesShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const service = services[current];

  return (
    <section className="service-showcase">
      <div className="service-showcase-container">

        <div
          className="service-showcase-heading"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          <span>OUR SPECIALIZED SERVICES</span>

          <h2>
            Healthcare Solutions Built Around
            <strong> Quality & Reliability</strong>
          </h2>

          <p>
            Explore our complete range of healthcare, biomedical,
            infrastructure and technology services.
          </p>
        </div>

        <div
          key={current}
          className="service-showcase-card"
        >
          <div
            className="service-image-wrap"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-showcase-image"
            />

            <div className="service-image-number">
              {String(current + 1).padStart(2, "0")}
            </div>
          </div>

          <div
            className="service-showcase-content"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <span
              className="service-showcase-tag"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              {service.tag}
            </span>

            <h3
              data-aos="fade-up"
              data-aos-delay="140"
            >
              {service.title}
            </h3>

            <p
              className="service-showcase-description"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {service.description}
            </p>

            <div className="service-showcase-points">
              {service.points.map((point, index) => (
                <div
                  className="service-point"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={260 + index * 70}
                >
                  <span className="service-check">
                    ✓
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div
              className="service-showcase-actions"
              data-aos="fade-up"
              data-aos-delay="320"
            >
              <Link
                href="/services"
                className="service-learn-btn"
              >
                Learn More
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="service-showcase-navigation"
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-delay="100"
        >
          <div className="service-count">
            <strong>
              {String(current + 1).padStart(2, "0")}
            </strong>

            <span className="service-count-line" />

            <span>
              {String(services.length).padStart(2, "0")}
            </span>
          </div>

          <div className="service-dots">
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={
                  current === index
                    ? "service-dot active"
                    : "service-dot"
                }
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>

          <div className="service-nav-buttons">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous service"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next service"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
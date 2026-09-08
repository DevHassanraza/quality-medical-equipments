"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero/hero-1.webp",
    tag: "QUALITY MEDICAL EQUIPMENTS",
    title: "Empowering Healthcare With Trusted Medical Solutions.",
    description:
      "Reliable medical equipment, advanced technology and professional support for hospitals, clinics and healthcare professionals.",
  },
  {
    image: "/images/hero/hero-2.webp",
    tag: "ADVANCED HEALTHCARE TECHNOLOGY",
    title: "Modern Equipment. Better Care. Better Outcomes.",
    description:
      "Delivering dependable healthcare technology designed to improve efficiency, diagnosis and patient care.",
  },
  {
    image: "/images/hero/hero-3.webp",
    tag: "QUALITY YOU CAN RELY ON",
    title: "Built Around Quality. Designed for Healthcare.",
    description:
      "From essential medical equipment to advanced clinical solutions, we help healthcare providers work with confidence.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="medical-hero">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`medical-hero-slide ${
            currentSlide === index ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="medical-hero-overlay" />

      {/* Decorative Glow */}
      <div className="medical-hero-glow" />

      {/* Main Content */}
      <div className="medical-hero-container">
        <div
          key={currentSlide}
          className="medical-hero-content"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div
            className="medical-hero-tag"
            data-aos="fade-right"
            data-aos-delay="80"
            data-aos-duration="750"
          >
            <span />
            {slides[currentSlide].tag}
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="850"
          >
            {slides[currentSlide].title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="230"
            data-aos-duration="850"
          >
            {slides[currentSlide].description}
          </p>

          <div
            className="medical-hero-buttons"
            data-aos="fade-up"
            data-aos-delay="310"
            data-aos-duration="800"
          >
            <Link
              href="/products"
              className="hero-primary-btn"
            >
              <span>Explore Products</span>

              <span className="hero-btn-arrow">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="hero-secondary-btn"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        className="hero-slider-arrow hero-slider-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
        data-aos="fade-right"
        data-aos-delay="350"
      >
        ‹
      </button>

      {/* Next */}
      <button
        type="button"
        className="hero-slider-arrow hero-slider-next"
        onClick={nextSlide}
        aria-label="Next slide"
        data-aos="fade-left"
        data-aos-delay="350"
      >
        ›
      </button>

      {/* Bottom Navigation */}
      <div
        className="hero-slider-bottom"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="750"
      >
        <div className="hero-slide-number">
          <span>
            0{currentSlide + 1}
          </span>

          <div className="hero-slide-line" />

          <span>
            0{slides.length}
          </span>
        </div>

        <div className="hero-slider-dots">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={
                currentSlide === index
                  ? "hero-dot active"
                  : "hero-dot"
              }
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
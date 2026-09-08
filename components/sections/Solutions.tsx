const solutions = [
  {
    title: "Hospital Construction",
    description:
      "Planning and development support for modern healthcare facilities and hospital environments.",
    icon: "🏥",
  },
  {
    title: "Healthcare Licensing",
    description:
      "Professional guidance and support for healthcare facility licensing and compliance.",
    icon: "📋",
  },
  {
    title: "Biomedical MOU",
    description:
      "Reliable biomedical support and service agreements for healthcare organizations.",
    icon: "🩺",
  },
  {
    title: "Equipment Repairing",
    description:
      "Professional inspection, maintenance and repair services for medical equipment.",
    icon: "🛠️",
  },
  {
    title: "HIMS Software",
    description:
      "Smart hospital information management solutions for efficient healthcare operations.",
    icon: "💻",
  },
  {
    title: "Biomedical Equipment",
    description:
      "Quality biomedical equipment designed for reliable clinical and hospital use.",
    icon: "⚕️",
  },
  {
    title: "Hospital Furniture",
    description:
      "Practical and durable hospital furniture designed for comfort and clinical efficiency.",
    icon: "🛏️",
  },
  {
    title: "Medical Gas Pipeline",
    description:
      "Complete medical gas pipeline systems for safe and dependable hospital operations.",
    icon: "🧯",
  },
  {
    title: "Surgical Instruments",
    description:
      "Reliable surgical instruments for hospitals, operating rooms and medical professionals.",
    icon: "✚",
  },
  {
    title: "Medical Disposables",
    description:
      "Essential disposable medical products for safe and hygienic healthcare environments.",
    icon: "🧴",
  },
];

export default function Solutions() {
  return (
    <section className="solutions-section">
      <div className="solutions-container">

        <div
          className="solutions-heading"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          <span
            className="solutions-small-title"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            OUR EXPERTISE
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="140"
          >
            Complete Healthcare
            <span> Solutions</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From medical equipment and hospital infrastructure to
            biomedical support and healthcare technology, we provide
            dependable solutions designed around modern healthcare needs.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              className="solution-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 5) * 90}
              data-aos-duration="800"
            >

              <div
                className="solution-card-top"
                data-aos="fade-up"
                data-aos-delay={(index % 5) * 90 + 60}
              >
                <div className="solution-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="solution-icon">
                  {solution.icon}
                </div>
              </div>

              <h3>
                {solution.title}
              </h3>

              <p>
                {solution.description}
              </p>

              <a
                href="/services"
                className="solution-link"
              >
                View Details
                <span>→</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
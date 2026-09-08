export default function WhatsAppButton() {
  const whatsappNumber = "923001234567";

  const message =
    "Hello Quality Medical Equipments, I would like to know more about your products and services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky"
      aria-label="Chat with Quality Medical Equipments on WhatsApp"
    >
      <span className="whatsapp-tooltip">
        Chat with us
      </span>

      <svg
        className="whatsapp-svg"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.02 3C8.83 3 3 8.75 3 15.84c0 2.5.74 4.94 2.13 7.02L3 29l6.34-2.03a13.13 13.13 0 0 0 6.67 1.82h.01C23.2 28.79 29 23.04 29 15.94 29 8.84 23.2 3 16.02 3Zm0 23.62a10.96 10.96 0 0 1-5.59-1.52l-.4-.24-3.76 1.2 1.23-3.62-.26-.42a10.7 10.7 0 0 1-1.67-5.76c0-5.98 4.92-10.84 10.96-10.84 2.92 0 5.67 1.13 7.73 3.16a10.7 10.7 0 0 1 3.21 7.67c0 5.98-4.91 10.84-10.95 10.84Zm6.01-8.12c-.33-.16-1.95-.95-2.25-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.24-.71.08-.33-.16-1.39-.5-2.65-1.61a9.83 9.83 0 0 1-1.83-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.42-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.69s1.17 3.12 1.33 3.34c.16.22 2.3 3.47 5.57 4.87.78.33 1.38.53 1.86.68.78.24 1.49.21 2.05.13.63-.09 1.95-.79 2.22-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.63-.38Z"
        />
      </svg>

      <span className="whatsapp-pulse" />
    </a>
  );
}
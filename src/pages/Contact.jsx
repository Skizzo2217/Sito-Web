export default function Contact() {
  return (
    <div className="contact-page">

      <h1>Contatti</h1>

      <div className="contact-container">

        <div className="contact-box">
          <h2>Contattami</h2>

          <p>
            📩 <a href="mailto:nome@email.com">Email</a>
          </p>
          <p>
            📞 <a href="tel:+39123456789">Telefono</a>
          </p>
          <p>
            📷 <a href="https://instagram.com/tuoprofilo" target="_blank">Instagram</a>
          </p>
        </div>

        <div className="download-box">
          <h2>Download</h2>

          <a href="/Sito-Web/cv.pdf" download>Scarica CV</a>
          <a href="/Sito-Web/portfolio.pdf" download>Scarica Portfolio</a>
        </div>

      </div>

    </div>
  );
}

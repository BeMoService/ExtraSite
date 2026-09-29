import PhotoCarousel from "../components/PhotoCarousel.jsx";
import VideoPoster from "../components/VideoPoster.jsx";
import {
  MIMIPADEL_EMAIL,
  MIMIPADEL_INSTAGRAM_HANDLE,
  MIMIPADEL_INSTAGRAM_URL,
  MIRJAM_PHONE_DISPLAY,
  MIRJAM_WHATSAPP_URL,
} from "../config/contact.js";
import { contactPortraitPhotos, contactVideo, contactVideoPoster } from "../config/media.js";

export default function Contact() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <PhotoCarousel
          images={contactPortraitPhotos}
          ariaLabel="Contactfoto's"
          label="Contactfoto's volgen"
          aspect="4x5"
        />
      </div>

      <div className="col-text">
        <h1 className="page-title">Contactgegevens</h1>

        <div className="page-body">
          <p className="lead-text">
            Vragen over een reis, een eigen groep of iets anders? Neem gerust contact op — wij denken graag
            met je mee.
          </p>
        </div>

        <div className="contact-lines">
          <a
            href={MIRJAM_WHATSAPP_URL}
            className="contact-line contact-line--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon" aria-hidden>
              ☎
            </span>
            <span>
              Mirjam <strong>{MIRJAM_PHONE_DISPLAY}</strong> (WhatsApp)
            </span>
          </a>

          <a href={`mailto:${MIMIPADEL_EMAIL}`} className="contact-line contact-line--link">
            <span className="contact-icon" aria-hidden>
              ✉
            </span>
            <span>{MIMIPADEL_EMAIL}</span>
          </a>

          <a
            href={MIMIPADEL_INSTAGRAM_URL}
            className="contact-line contact-line--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon" aria-hidden>
              ◎
            </span>
            <span>Instagram — @{MIMIPADEL_INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <div className="secondary-media">
          <VideoPoster
            videoSrc={contactVideo}
            posterSrc={contactVideoPoster}
            label="Video volgt"
            aspect="3x2"
          />
        </div>
      </div>
    </section>
  );
}

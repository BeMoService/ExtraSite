import MediaFrame from "../components/MediaFrame.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import {
  MIMIPADEL_EMAIL,
  MIMIPADEL_INSTAGRAM_HANDLE,
  MIMIPADEL_INSTAGRAM_URL,
  MIRJAM_PHONE_DISPLAY,
  MIRJAM_WHATSAPP_URL,
} from "../config/contact.js";
import { contactHeroImage, contactSecondaryImage } from "../config/media.js";

export default function Contact() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={contactHeroImage} alt="" label="Contact — afbeelding volgt" />
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

        <SecondaryMedia src={contactSecondaryImage} label="Media volgt" />
      </div>
    </section>
  );
}

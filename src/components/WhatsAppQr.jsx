import QRCode from "react-qr-code";
import { MIRJAM_WHATSAPP_URL } from "../config/contact.js";

export default function WhatsAppQr({
  url = MIRJAM_WHATSAPP_URL,
  title = "Reserveer via WhatsApp",
  hint = "Scan met je telefoon — je opent direct een chat met Mirjam.",
  className = "",
}) {
  return (
    <div className={`whatsapp-qr ${className}`.trim()}>
      <p className="whatsapp-qr__title">{title}</p>
      <div className="whatsapp-qr__frame">
        <QRCode value={url} size={200} bgColor="#faf8f3" fgColor="#1c2420" aria-hidden="true" />
      </div>
      <p className="whatsapp-qr__hint">{hint}</p>
      <a href={url} className="whatsapp-qr__link" target="_blank" rel="noopener noreferrer">
        Of open WhatsApp op dit apparaat
      </a>
    </div>
  );
}

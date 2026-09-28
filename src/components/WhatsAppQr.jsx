import QRCode from "react-qr-code";
import { MIRJAM_WHATSAPP_URL } from "../config/contact.js";

export default function WhatsAppQr({
  url = MIRJAM_WHATSAPP_URL,
  title = "Reserveer via WhatsApp",
  className = "",
}) {
  return (
    <div className={`whatsapp-qr ${className}`.trim()}>
      <p className="whatsapp-qr__title">{title}</p>
      <div className="whatsapp-qr__frame">
        <QRCode value={url} size={200} bgColor="#faf8f3" fgColor="#1c2420" aria-hidden="true" />
      </div>
    </div>
  );
}

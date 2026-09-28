import QRCode from "react-qr-code";
import { MIRJAM_WHATSAPP_URL } from "../config/contact.js";

export default function WhatsAppQr({
  url = MIRJAM_WHATSAPP_URL,
  title = "Reserveer via WhatsApp",
  className = "",
  size = 200,
}) {
  return (
    <div className={`whatsapp-qr ${className}`.trim()}>
      <p className="whatsapp-qr__title">{title}</p>
      <div className="whatsapp-qr__frame">
        <QRCode value={url} size={size} bgColor="#faf8f3" fgColor="#1c2420" aria-hidden="true" />
      </div>
    </div>
  );
}

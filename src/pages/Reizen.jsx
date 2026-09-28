import MediaFrame from "../components/MediaFrame.jsx";
import WhatsAppQr from "../components/WhatsAppQr.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { tripHeroImage, tripVideo } from "../config/media.js";

export default function Reizen() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <MediaFrame src={tripHeroImage} alt="" label="Reis-afbeelding volgt" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Onze reizen</h1>

        <div className="page-body">
          <p>
            Mimipadel staat voor op maat gemaakte reizen. Wil jij graag genieten van &ldquo;la dolce vita&rdquo; in
            het heuvelachtige Toscane, of juist het bruisende Perugia ontdekken in Umbrië? Wij bieden een vaste
            basis met vaste padel momenten en uiteraard seizoensgebonden excursies. Jij kiest jouw favoriete
            bestemming, wordt het Sinalunga of Perugia? Bekijk hier onze reizen en vraag direct via WhatsApp jouw
            offerte aan.
          </p>

          <p className="note-text">
            Let op: wij bieden deze reis aan bij een afname van 4 – 12 personen. Voor grotere groepen
            vragen wij via whatsapp contact op te nemen.
          </p>
        </div>

        <WhatsAppQr className="btn--spaced" />

        <SecondaryMedia src={tripVideo} label="Video volgt" type="video" />
      </div>
    </section>
  );
}

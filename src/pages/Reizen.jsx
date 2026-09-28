import MediaFrame from "../components/MediaFrame.jsx";
import WhatsAppQr from "../components/WhatsAppQr.jsx";
import { SecondaryMedia } from "../components/PageSideContent.jsx";
import { tripHeroImage, tripSecondaryImage, tripVideo } from "../config/media.js";

export default function Reizen() {
  return (
    <section className="section reizen-page">
      <div className="reizen-page__hero grid grid-2">
        <div className="reizen-page__photo-1">
          <MediaFrame src={tripHeroImage} alt="" label="Reis-afbeelding volgt" aspect="4x5" />
        </div>

        <div className="reizen-page__hero-side">
          <h1 className="page-title">Onze reizen</h1>

          <div className="page-body reizen-page__hero-copy">
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

          <div className="reizen-page__qr">
            <WhatsAppQr />
          </div>
        </div>
      </div>

      <div className="reizen-page__regions grid grid-2">
        <div className="page-body">
          <h2 className="page-subtitle">Toscane</h2>
          <p>
            In Toscane werken we samen met &ldquo;TODA&rdquo;, een nieuwe familieclub met nu al meer dan 650 leden.
            Hier word je getraind door FITP-coaches Federico, Nicole en Antonio. Zij staan garant voor persoonlijke
            aandacht en een geduldige uitleg. Laat je na een intensieve padelles verwennen op een historisch
            landgoed: Tenuta La Fratta zorgt voor een sfeervol verblijf. Ontdek hier de authentieke
            &ldquo;Cucina&rdquo; en geniet van een verfijnd glas wijn op het terras of aan het buitenzwembad.
          </p>

          <h2 className="page-subtitle">Umbrië</h2>
          <p>
            In Umbrië werken we samen met dé beste padelclub van Italië. Hier word je getraind door één van de maar
            liefst zeven FITP-coaches. Zij trainen onder andere de nieuwste generatie die in de toekomst zal shinen
            op de Premier Padel. Na een zware workout kom je volledig tot rust in het wellnesscentrum van ons
            viersterrenhotel, dat op loopafstand van de baan ligt.
          </p>
        </div>

        <div className="reizen-page__photo-2">
          <MediaFrame src={tripSecondaryImage} alt="" label="Reis-afbeelding volgt" aspect="4x5" />
        </div>
      </div>

      <SecondaryMedia src={tripVideo} label="Video volgt" type="video" />
    </section>
  );
}

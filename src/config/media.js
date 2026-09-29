/**
 * Media — nieuwe bestanden hier koppelen.
 *
 * Voorbeeld foto:
 *   import hero from "../assets/home.jpg";
 *   export const homeHeroImage = hero;
 *
 * Zolang een waarde null is, toont de site een placeholder (layout blijft hetzelfde).
 */

import mimiVideoCover from "../assets/mimi-video-cover.jpeg";
import mimiIntroVideo from "../assets/mimi-intro.mp4";
import homeHeroVideo from "../assets/home-hero-video.mp4";
import homeTopKwartet from "../assets/home-top-kwartet.jpeg";
import reizenPrijs01 from "../assets/reizen-prijs-01.jpeg";
import reizenPrijs02 from "../assets/reizen-prijs-02.jpeg";
import reizenPrijs03 from "../assets/reizen-prijs-03.jpeg";
import reizenPrijs04 from "../assets/reizen-prijs-04.jpeg";
import reizenPrijs05 from "../assets/reizen-prijs-05.jpeg";

import todaClub01 from "../assets/clubs/toda-club-01.jpeg";
import todaClub02 from "../assets/clubs/toda-club-02.jpeg";
import todaClub03 from "../assets/clubs/toda-club-03.jpeg";
import todaClub04 from "../assets/clubs/toda-club-04.jpeg";
import todaTrainer01 from "../assets/clubs/toda-trainer-01.jpeg";
import todaTrainer02 from "../assets/clubs/toda-trainer-02.jpeg";
import todaTrainer03 from "../assets/clubs/toda-trainer-03.jpeg";
import tenutaLaFratta01 from "../assets/tenuta-la-fratta/tenuta-la-fratta-01.jpeg";
import tenutaLaFratta02 from "../assets/tenuta-la-fratta/tenuta-la-fratta-02.jpeg";
import tenutaLaFratta03 from "../assets/tenuta-la-fratta/tenuta-la-fratta-03.jpeg";
import tenutaLaFratta04 from "../assets/tenuta-la-fratta/tenuta-la-fratta-04.jpeg";
import perugiaClub01 from "../assets/clubs/perugia/perugia-club-01.jpeg";
import perugiaClub02 from "../assets/clubs/perugia/perugia-club-02.jpeg";
import perugiaClub03 from "../assets/clubs/perugia/perugia-club-03.jpeg";
import perugiaTrainers from "../assets/clubs/perugia/perugia-trainers.jpeg";
import parkHotelPerugia01 from "../assets/perugia-hotel/park-hotel-perugia-01.jpeg";
import parkHotelPerugia02 from "../assets/perugia-hotel/park-hotel-perugia-02.jpeg";
import parkHotelPerugia03 from "../assets/perugia-hotel/park-hotel-perugia-03.jpeg";
import parkHotelPerugia04 from "../assets/perugia-hotel/park-hotel-perugia-04.jpeg";

export const homeHeroImage = null;
export const homeSecondaryImage = null;
/** Foto onderaan home (boven tekst + video) */
export const homeBottomPhoto = homeTopKwartet;
export const homeSecondaryVideo = homeHeroVideo;

export const tripHeroImage = reizenPrijs01;
export const tripSecondaryImage = reizenPrijs02;
export const tripTertiaryImage = reizenPrijs03;
export const tripQuaternaryImage = reizenPrijs04;
export const tripQuinaryImage = reizenPrijs05;
export const tripVideo = null;

export const trainingHeroImage = null;
export const trainingSecondaryImage = null;

export const clubsHeroImage = null;
export const clubsSecondaryImage = null;

/** TODA — clubfoto's (carousel links) */
export const todaClubPhotos = [todaClub01, todaClub02, todaClub03, todaClub04];
/** TODA — trainers (carousel onder tekst) */
export const todaTrainerPhotos = [todaTrainer01, todaTrainer02, todaTrainer03];
/** TODA — Tenuta la Fratta verblijf */
export const todaTenutaPhotos = [tenutaLaFratta03, tenutaLaFratta02, tenutaLaFratta01, tenutaLaFratta04];

/** Padel Arena Fastweb Perugia — clubfoto's (carousel links) */
export const perugiaClubPhotos = [perugiaClub01, perugiaClub02, perugiaClub03];
export const perugiaTrainerPhotos = [perugiaTrainers];
/** Perugia — Park Hotel */
export const perugiaHotelPhotos = [
  parkHotelPerugia03,
  parkHotelPerugia04,
  parkHotelPerugia02,
  parkHotelPerugia01,
];

/** Wie is Mimi — omslagfoto bovenaan de pagina */
export const mimiCoverImage = null;
/** Coverfoto op de video wanneer die niet speelt */
export const mimiVideoPoster = mimiVideoCover;
export const mimiVideo = mimiIntroVideo;

/** @deprecated gebruik mimiCoverImage / mimiVideoPoster */
export const mimiHeroImage = null;
export const mimiSecondaryImage = null;

export const contactHeroImage = null;
export const contactSecondaryImage = null;

export const termsHeroImage = null;

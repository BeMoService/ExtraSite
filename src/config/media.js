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

import todaClub01 from "../assets/clubs/toda-club-01.jpeg";
import todaClub02 from "../assets/clubs/toda-club-02.jpeg";
import todaClub03 from "../assets/clubs/toda-club-03.jpeg";
import todaClub04 from "../assets/clubs/toda-club-04.jpeg";
import todaTrainer01 from "../assets/clubs/toda-trainer-01.jpeg";
import todaTrainer02 from "../assets/clubs/toda-trainer-02.jpeg";
import todaTrainer03 from "../assets/clubs/toda-trainer-03.jpeg";

export const homeHeroImage = null;
export const homeSecondaryImage = null;

export const tripHeroImage = null;
export const tripVideo = null;

export const trainingHeroImage = null;
export const trainingSecondaryImage = null;

export const clubsHeroImage = null;
export const clubsSecondaryImage = null;

/** TODA — clubfoto's (carousel links) */
export const todaClubPhotos = [todaClub01, todaClub02, todaClub03, todaClub04];
/** TODA — trainers (carousel onder tekst) */
export const todaTrainerPhotos = [todaTrainer01, todaTrainer02, todaTrainer03];

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

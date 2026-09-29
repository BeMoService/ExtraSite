import { useRef, useState } from "react";
import MediaFrame from "./MediaFrame.jsx";

const RATIO_CLASS = {
  "4x5": "ratio-4x5",
  "3x2": "ratio-3x2",
  "16x9": "ratio-16x9",
};

export default function VideoPoster({
  videoSrc,
  posterSrc,
  label = "Video volgt",
  aspect = "4x5",
}) {
  const ratioClass = RATIO_CLASS[aspect] ?? RATIO_CLASS["4x5"];
  const videoRef = useRef(null);
  const [showCover, setShowCover] = useState(Boolean(posterSrc));

  if (!videoSrc) {
    return <MediaFrame src={posterSrc} alt="" label={posterSrc ? undefined : label} />;
  }

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    setShowCover(false);
    video.play().catch(() => setShowCover(Boolean(posterSrc)));
  };

  return (
    <div className={ratioClass}>
      <div className="video-poster">
        <video
          ref={videoRef}
          className="video-poster__video"
          src={videoSrc}
          poster={posterSrc || undefined}
          controls
          playsInline
          preload="metadata"
          onPlay={() => setShowCover(false)}
          onPause={() => setShowCover(Boolean(posterSrc))}
          onEnded={() => setShowCover(Boolean(posterSrc))}
        />

        {showCover && posterSrc && (
          <button
            type="button"
            className="video-poster__cover"
            onClick={startPlayback}
            aria-label="Video afspelen"
          >
            <img src={posterSrc} alt="" className="video-poster__cover-img" />
            <span className="video-poster__play" aria-hidden="true">
              ▶
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

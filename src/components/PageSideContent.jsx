import MediaFrame from "./MediaFrame.jsx";

export function PlaceholderBlocks() {
  return (
    <>
      <div className="content-slot content-slot--lead" aria-label="Intro tekst volgt" />
      <div className="info-list">
        <div className="info-item info-item--placeholder" aria-label="Tekstblok volgt" />
        <div className="info-item info-item--placeholder" aria-label="Tekstblok volgt" />
      </div>
    </>
  );
}

export function SecondaryMedia({ src, label = "Media volgt", type = "image", aspect = "4x5" }) {
  const ratioClass =
    aspect === "16x9" ? "ratio-16x9" : aspect === "3x2" ? "ratio-3x2" : "ratio-4x5";

  return (
    <div className="secondary-media">
      {src && type === "video" ? (
        <div className={ratioClass}>
          <video
            src={src}
            controls
            playsInline
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
          />
        </div>
      ) : (
        <MediaFrame src={src} alt="" label={label} aspect={aspect} />
      )}
    </div>
  );
}

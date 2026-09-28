const RATIO_CLASS = {
  "4x5": "ratio-4x5",
  "3x2": "ratio-3x2",
  "16x9": "ratio-16x9",
};

export default function MediaFrame({ src, alt = "", label = "Afbeelding volgt", aspect = "4x5" }) {
  const ratioClass = RATIO_CLASS[aspect] ?? RATIO_CLASS["4x5"];

  return (
    <div className={ratioClass}>
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
        />
      ) : (
        <div className="media-placeholder-fill">
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

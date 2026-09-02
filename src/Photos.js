import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (!Array.isArray(photos) || photos.length === 0) {
    return <p className="no-photos">No photos found.</p>;
  }

  return (
    <div className="Photos">
      {photos.map((photo, index) => {
        const imageUrl =
          photo.src?.large2x ||
          photo.src?.large ||
          photo.src?.medium ||
          photo.src?.original ||
          photo.url ||
          photo.image;

        if (!imageUrl) return null;

        return (
          <img
            key={photo.id || index}
            src={imageUrl}
            alt={photo.alt || "Related to the searched word"}
          />
        );
      })}
    </div>
  );
}
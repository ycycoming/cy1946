"use client";

import { useState } from "react";

export default function QRCodeImage({ src, alt, fallbackText, borderColor = "border-indigo-200", bgColor = "bg-gray-50", textColor = "text-gray-500" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-48 h-48">
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className={`w-48 h-48 rounded-lg border-2 ${borderColor} object-cover`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={`w-48 h-48 rounded-lg border-2 ${borderColor} ${bgColor} flex items-center justify-center`}>
          <p className={`${textColor} text-sm text-center px-4`}>
            {fallbackText}
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function QRCodeImage({ src, alt, fallbackText }) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`w-48 h-48 rounded-lg border-2 border-indigo-200 ${imageError ? 'hidden' : ''}`}
        onError={() => setImageError(true)}
      />
      {imageError && (
        <div className="w-48 h-48 rounded-lg border-2 border-indigo-200 bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500 text-sm text-center px-4">
            {fallbackText}
          </p>
        </div>
      )}
    </>
  );
}

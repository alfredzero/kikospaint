"use client";
import { useState, useEffect } from "react";

export default function Loader({ gifSrc }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // Ensure full fade out before removing
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Hide loader after fade out

  return (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <img src={gifSrc} alt="Loading..." className="loader-gif" />
    </div>
  );
}

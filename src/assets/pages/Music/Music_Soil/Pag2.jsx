import React, { useRef, useEffect } from "react";

export default function MusicaAmbient() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Autoplay cuando el componente se monta
    audioRef.current.play().catch(() => {
      console.log("Autoplay bloqueado por el navegador, espera interacción.");
    });
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/music/musicAmbient.mp3" type="audio/mpeg" />
      Tu navegador no soporta el audio.
    </audio>
  );
}
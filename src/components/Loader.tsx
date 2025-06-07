/*
 * Animation Loader Gabon (flag, logo, dots, progress bar, particles)
 * Utilisation : <Loader />
 */
import React, { useEffect, useState } from "react";

// On utilise le logo local Logo.png
const LOGO_SRC = "/uploads/Logo.png";

export const Loader: React.FC<{ loadingDone: boolean }> = ({ loadingDone }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Génère les particules animées
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
      const colors = [
        "rgba(0, 158, 96, 0.3)",
        "rgba(252, 209, 22, 0.3)",
        "rgba(58, 117, 196, 0.3)"
      ];
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = Math.random() * 5 + 5 + "s";
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particlesContainer.appendChild(particle);
      }
    }
    return () => {
      if (particlesContainer) particlesContainer.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    if (loadingDone) {
      // Démarre le fade-out uniquement quand le chargement est fini
      setFadeOut(true);
    }
  }, [loadingDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      aria-label="Chargement du site DGDI Gabon"
    >
      <div className="loader-container">
        <div className="particles" id="particles" />
        <div className="logo-container">
          {/* Suppression du flagpole, affichage du logo PNG au centre */}
          <img
            src="/uploads/Logo.png"
            alt="Logo DGDI Gabon"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-0 animate-fade-in"
          />
        </div>
        <div className="loading-dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="progress-container">
          <div className="progress-bar" />
        </div>
      </div>
    </div>
  );
};

export default Loader;

// Styles à intégrer dans index.css ou App.css (voir étape suivante)

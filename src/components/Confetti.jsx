import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = () => {
  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff66a3", "#ffcc00", "#00ccff", "#66ff66"],
      gravity: 0.7,
    });
  }, []);

  return null; // فقط افکت اجرا می‌شود، نیازی به رندر کردن المان نیست
};

export default Confetti;

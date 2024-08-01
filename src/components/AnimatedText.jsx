import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const phrases = ["full-stack developer", "UI/UX designer", "software engineer"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change phrase every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="animated-text">
      {phrases[currentPhraseIndex]}
    </span>
  );
};

export default AnimatedText;

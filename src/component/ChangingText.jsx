import React, { useState, useEffect } from "react";

 const ChangingText = ({ words, speed = 150, delay = 1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(text.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setText(word.slice(0, text.length + 1));
      }, speed);
    }

    if (!isDeleting && text === word) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="lg:text-xl font-arial tracking-wider">
      {text} <span>|</span>
    </span>
  );
};

export default ChangingText;

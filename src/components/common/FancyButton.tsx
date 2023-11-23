import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

interface FancyButtonProps {
  inputText: string;
  route: string;
  isExternal?: boolean;
  isSmall?: boolean;
}

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const FancyButton = ({
  inputText,
  route,
  isExternal = false,
  isSmall = false,
}: FancyButtonProps) => {
  const intervalRef = useRef<number | null>(null);
  const [text, setText] = useState(inputText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(inputText);
  };

  useEffect(() => {
    setText(inputText);
  }, [inputText]);

  return (
    <Link to={route} target={isExternal ? "_blank" : ""} draggable="false">
      <motion.button
        whileHover={{
          scale: 1.025,
        }}
        whileTap={{
          scale: 0.975,
        }}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        className={`group relative overflow-hidden h-[4rem]  ${
          isSmall
            ? "w-[5rem] p-2 bg-gradient-to-br from-technologies-tailwindcss/100 to-technologies-chakraui rounded-2xl"
            : "w-[11rem] p-4 bg-accent-2/10 backdrop-blur-sm rounded-3xl"
        } m-4 uppercase text-primary transition-colors hover:text-accent-1`}
      >
        <div
          className={`flex items-center ${
            isSmall ? "justify-center" : "justify-between"
          } z-10`}
        >
          <span>{text}</span>
          <div
            className={`${
              isSmall ? "hidden" : "flex"
            } text-4xl group-hover:translate-x-2 transition-all duration-300 text-primary group-hover:text-accent-1`}
          >
            <HiArrowRight />
          </div>
        </div>
      </motion.button>
    </Link>
  );
};

export default FancyButton;

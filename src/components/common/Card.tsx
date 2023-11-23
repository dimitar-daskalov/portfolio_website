import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FancyButton from "./FancyButton";
import { useTranslation } from "react-i18next";

interface CardProps {
  name: string;
  description: string;
  appDemo: string;
  appGitHub: string;
}

const Card = ({ name, description, appDemo, appGitHub }: CardProps) => {
  const [t] = useTranslation("global");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-3xl bg-gradient-to-br from-accent-2/10 to-primary/80 m-2"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-3xl bg-primary px-2 py-4 gap-8"
      >
        <h1
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-2xl text-secondary font-bold text-center"
        >
          {name}
        </h1>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xl text-accent-2"
        >
          {description}
        </p>
        <div
          style={{
            transform: "translateZ(25px)",
          }}
          className="flex flex-wrap justify-between gap-2"
        >
          <FancyButton
            inputText={t("work.buttons.demo")}
            route={appDemo}
            isExternal
            isSmall
          />
          <FancyButton
            inputText="GitHub"
            route={appGitHub}
            isExternal
            isSmall
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

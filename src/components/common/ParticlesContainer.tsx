import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      className="w-screen h-screen"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
          },
        },
        particles: {
          color: {
            value: "rgb(116, 116, 115)",
          },
          links: {
            color: "rgb(116, 116, 115)",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;

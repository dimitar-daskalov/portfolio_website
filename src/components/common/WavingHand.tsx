import { motion } from "framer-motion";

const WavingHand = () => (
  <motion.div
    className="mb-[-5] mr-[-11] pb-5 pr-1 inline-block"
    animate={{ rotate: 20 }}
    transition={{
      repeat: 2,
      from: 0,
      duration: 0.4,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    👋
  </motion.div>
);

export default WavingHand;

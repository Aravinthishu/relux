import { motion } from "framer-motion";

const ShinyButton = ({ buttonText }) => {
  return (
    <motion.div
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 rounded-md relative radial-gradient1"
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask1">
        {buttonText}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay1" />
    </motion.div>
  );
};

export default ShinyButton;
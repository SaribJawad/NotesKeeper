import { motion } from "framer-motion";

function Modal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.1,
      }}
      className="fixed top-0 left-0 w-full h-screen backdrop-blur-[4px] z-[1000]  transition-all duration-[0.5s]"
    >
      <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#19191C] rounded-3xl transition-all duration-[0.5s] ">
        {children}
      </div>
    </motion.div>
  );
}

export default Modal;

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { motion } from "framer-motion";
import { auth } from "../firebase/firebase";

function Login() {
  const googleProvider = new GoogleAuthProvider();

  // Sigining in new user
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorMessage}/${errorCode}`);
    });
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
    "
    >
      <div className="flex items-center justify-center flex-col gap-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-3xl"
        >
          Login with google to get started.
        </motion.h1>

        <motion.button
          onClick={signInWithGoogle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="btn bg-[#19191C] "
        >
          Click to login
        </motion.button>
      </div>
    </div>
  );
}

export default Login;

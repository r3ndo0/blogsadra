import Image from "next/image";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.nav className="justify-between items-center  max-w-fit text-white  backdrop-blur-3xl md:px-8 pb-2 pt-4 z-[2] fixed left-1/2 translate-x-[-50%] bottom-4 flex gap-8 rounded-full">
      <motion.a
        transition={{ type: "spring", stiffness: 50 }}
        initial={{ y: -3000 }}
        animate={{ y: 0 }}
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <Image src="/assets/instagram.png" width="45px" height="45px" />
      </motion.a>
      <motion.a
        transition={{ type: "spring", stiffness: 50 }}
        initial={{ y: -3000 }}
        animate={{ y: 0 }}
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <Image src="/assets/whatsapp.png" width="45px" height="45px" />
      </motion.a>
      <motion.a
        transition={{ type: "spring", stiffness: 50 }}
        initial={{ y: -3000 }}
        animate={{ y: 0 }}
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <Image src="/assets/telegram.png" width="45px" height="45px" />
      </motion.a>
    </motion.nav>
  );
};

export default Socials;

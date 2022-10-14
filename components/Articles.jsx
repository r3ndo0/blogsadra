import { motion } from "framer-motion";
import Image from "next/image";

function Articles() {
  return (
    <div className="h-screen border-b-2 grid grid-cols-1 md:grid-cols-3 border-black w-full">
      <div className=" h-[400px] m-12 rounded-3xl bg-gray-800"></div>
      <div className=" h-[400px] m-12 rounded-3xl bg-gray-800"></div>

      <div className=" h-[400px] m-12 rounded-3xl bg-gray-800"></div>
      <div className="flex mb-20 text-3xl  col-start-1 col-end-4 justify-center items-center text-[#2196F3]">
        <a className="mx-6">مقالات بیشتر</a>
        <motion.div
          initial={{ scale: 0.2, x: -30 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ type: "tween", duration: 2, repeat: Infinity }}
        >
          <Image src="/assets/arrowpic.png" width="40px" height="40px" />
        </motion.div>
      </div>
    </div>
  );
}

export default Articles;

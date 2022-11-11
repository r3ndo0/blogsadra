import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

function Articles() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className=" gap-8  px-8 py-12  grid grid-cols-1 md:grid-cols-3 w-full">
        <div
          data-aos="fade-right"
          className=" h-[50vh] w-full rounded-3xl bg-gray-800"
        ></div>
        <div
          data-aos="fade-down"
          className=" h-[50vh] w-full rounded-3xl bg-gray-800"
        ></div>

        <div
          data-aos="fade-left"
          className=" h-[50vh] w-full rounded-3xl bg-gray-800"
        ></div>
      </div>
      <div className="flex mb-20 text-3xl  py-12 justify-center items-center text-[#2196F3]">
        <a className="mx-6">مقالات بیشتر</a>
        <motion.div
          initial={{ scale: 0.2, x: -30 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ type: "tween", duration: 2, repeat: Infinity }}
        >
          <Image src="/assets/arrowpic.png" width="40px" height="40px" />
        </motion.div>
      </div>
    </>
  );
}

export default Articles;

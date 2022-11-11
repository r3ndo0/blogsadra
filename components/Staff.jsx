import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Staff() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="h-screen w-full p-10 flex justify-center items-center">
      <div data-aos="fade-right" className="bg-black mx-4 h-full w-full"></div>
      <div
        data-aos="fade-left"
        className="w-full h-full bg-gray-300 mx-4"
      ></div>
    </div>
  );
}

export default Staff;

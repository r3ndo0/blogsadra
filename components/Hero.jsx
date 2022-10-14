import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="custom-bg flex flex-col rounded-br-3xl justify-center items-center w-full h-screen">
        <div className="text-white text-5xl max-w-[350px] text-center mt-20 m-6">
          گروه وکلای{" "}
          <span className="text-amber-500  text-center text-7xl">صدرا</span>
        </div>
        <div className="text-amber-300  text-xl max-w-[220px] text-center m-6">
          مشاوره رایگان در روزهای سه شنبه و پنج شنبه
        </div>
        <div className=" border-white border-2 shadow-xl shadow-black text-gray-900 bg-amber-500  ease-in-out duration-200 hover:scale-110 text-xl  p-2 px-8">
          رزرو وقت مشاوره
        </div>
      </div>
      <div className=" rounded-3xl flex custom-bg-2 justify-center items-center w-full h-screen">
        <Swiper
          className="w-full h-full  mt-6 md:h-[75%] md:mt-[43px]"
          pagination={{
            type: "progressbar",
          }}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
        >
          <SwiperSlide className="flex max-w-[480] text-center flex-col  justify-center items-center">
            <video
              className="max-w-[300px] rounded-full border-2 border-gray-900 mb-2 max-h-[300px]"
              src="/assets/Divorce.mp4"
              loop
              autoPlay
              muted
            />
            <h1 className="text-5xl text-gray-900"> مشاوره طلاق</h1>
          </SwiperSlide>
          <SwiperSlide className="flex max-w-[480] text-center flex-col  justify-center items-center">
            <video
              className="max-w-[300px] rounded-full border-2 border-gray-900 mb-2 max-h-[300px]"
              src="/assets/Tax.mp4"
              loop
              autoPlay
              muted
            />
            <h1 className="text-5xl text-gray-900"> امور مالیاتی </h1>
          </SwiperSlide>
          <SwiperSlide className="flex max-w-[480] text-center flex-col  justify-center items-center">
            <video
              className="max-w-[300px] rounded-full border-2 border-gray-900 mb-2 max-h-[300px]"
              src="/assets/Police.mp4"
              loop
              autoPlay
              muted
            />
            <h1 className="text-5xl text-gray-900"> جرائم کیفری</h1>
          </SwiperSlide>
          <SwiperSlide className="flex max-w-[480] text-center flex-col  justify-center items-center">
            <video
              className="max-w-[300px] rounded-full border-2 border-gray-900 mb-2 max-h-[300px]"
              src="/assets/Building.mp4"
              loop
              autoPlay
              muted
            />
            <h1 className="text-5xl text-gray-900"> مشاوره ملکی</h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;

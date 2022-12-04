import { AiFillPhone } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navItemClassName =
  "hover:text-amber-200  m-2 p-2 text-md ease-out duration-150 cursor-pointer";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* -------------------------Primary Navbar ------------------------ */}
      <div className="z-10 fixed top-0 w-full ">
        <div className="w-full border-b-2 custom-bg p-2 h-auto text-white text-right">
          <div className="flex justify-between   items-center">
            <div className="flex justify-center gap-[4px] items-center">
              +989100037160
              <AiFillPhone size={20} />
            </div>
            <motion.h1
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 3 }}
              className="text-[12px] hidden md:block text-center "
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </motion.h1>
          </div>
        </div>
        <div className="hidden w-full z-[25] custom-bg h-16 md:flex justify-between border-b-2 items-center text-amber-400">
          <div className=" ml-12 mt-32">
            <Image
              className="rounded-lg"
              src="/assets/3.png"
              width="150px"
              height="150px"
            />
          </div>

          <div className="flex justify-around gap-2 p-3 ">
            <Menu as="div" className="relative inline-block text-right">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-transparent px-4 py-4 text-amber-400 shadow-xl  ">
                  <ChevronDownIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  خدمات ما
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-[#070335] shadow-lg   ">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-amber-400",
                            "block px-4 py-4 text-xl"
                          )}
                        >
                          دعاوی حقوقی{" "}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-amber-400",
                            "block px-4 py-4 text-xl"
                          )}
                        >
                          مشاوره{" "}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-amber-400",
                            "block px-4 py-4 text-xl"
                          )}
                        >
                          داوری{" "}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <a href="/about" className={navItemClassName}>
              {" "}
              درباره ما{" "}
            </a>
            <a href="/articles" className={navItemClassName}>
              مقالات
            </a>

            <a href="/" className={navItemClassName}>
              صفحه اصلی
            </a>
          </div>
          <div
            className={
              !dropdown
                ? "hidden"
                : "fixed h-48 flex flex-col justify-between items-center p-6 rounded-lg shadow-black shadow-xl w-64 top-[88px] bg-amber-400 text-[#070335] right-[185px]"
            }
          >
            <a className="py-4 hover:bg-amber-200">دعاوی حقوقی</a>
            <a className="py-4">مشاوره</a>
            <a className="py-4">داوری</a>
          </div>
        </div>
      </div>
      {/* -------------------------Secondary Navbar ------------------------ */}
      <motion.div
        className="md:hidden fixed w-full z-20"
        animate={{ y: 0 }}
        initial={{ y: -200 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className=" flex-row justify-between bg-gray-900">
          <div className="w-full border-b-2 custom-bg p-2 h-auto text-white text-right">
            <div className="flex justify-between   items-center">
              <div className="flex justify-center gap-[4px] items-center">
                +989100037160
                <AiFillPhone size={20} />
              </div>
              <button className=" text-xl  text-white	" onClick={handleClick}>
                {open ? <GiHamburgerMenu /> : <VscChromeClose />}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className={
            open
              ? "hidden "
              : "flex flex-col items-center w-full custom-bg backdrop-blur-xl text-amber-400 text-2xl justify-center divide-y  "
          }
          layout
        >
          <div className="p-5 m-5  cursor-pointer font-extrabold  ">
            صفحه اصلی
          </div>
          <Link href="/otherapps">
            <div className="p-5 m-5 font-extrabold "> مقالات</div>
          </Link>
          <div href="/weatherapp" className="p-5 m-5  font-extrabold ">
            خدمات ما
          </div>
          <div className="p-5 m-5  font-extrabold ">
            <Link href="/about">درباره ما</Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar;

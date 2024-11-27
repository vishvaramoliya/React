import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="main_div w-[100%] flex">
        <div className="head h-[100%] md:w-[50px] w-[50px]">
          <div className="icon">
            <h1 className="text-white">V</h1>
          </div>

          <div className="text-white">
            <Link className="home" to={"/"} title="Home">
              <i className="home fa-solid fa-house"></i>
            </Link>
            <br />
            <br />
            <Link className="link" to={"/about"} title="About">
              <i className="fa-solid fa-user"></i>
            </Link>
            <br />
            <br />
            <Link className="link" to={"/resume"} title="Resume">
              <i className="fa-solid fa-gear"></i>
            </Link>
            <br />
            <br />
            <Link className="link" to={"/port"} title="Portfolio">
              <i className="fa-solid fa-eye"></i>
            </Link>
            <br />
            <br />
            <Link className="link" to={"/contect"} title="Contact">
              <i className="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>

        <div className="animate__animated animate__fadeIn box box2 h-[100vh] w-[100%] flex flex-wrap justify-between overflow-scroll pb-10 bg-[#25262a]">
          <div className="main1 w-[100%]  overflow-scroll bg-[#25262a] text-center pt-10">
            <div className="text-center">
              <h1 className="animate__animated animate__bounceIn text-6xl lg:text-[120px] text-[#4c4d53] font-bold opacity-30">
                CONTACTS
              </h1>
            </div>

            <div className="animate__animated animate__bounce md:text-center md:mr-20 pl-2 md:mt-[-70px]">
              <h1 className="text-[#ffffff] font-bold text-7xl">
                {" "}
                <span className="text-[#67ba63]">Get</span> in Touch
              </h1>
            </div>
            <br />
            <br />

            <div className="pt-5 pb-5 flex flex-wrap justify-evenly">
              <div className="animate__animated animate__fadeInLeft bg-[#333438] items-center p-10 md:w-[40%] w-[95%] justify-start mt-10 rounded-2xl flex">
                <div>
                  <i class="fa-solid fa-location-dot text-[40px] text-[#5cc454]"></i>
                </div>
                <div className="text-start ml-5 md:ml-10">
                  <p className="text-white font-bold text-[25px]">Address</p>
                  <p className="text-[#8d8f92]">Rajkot , Gujarat</p>
                </div>
              </div>

              <div className="animate__animated animate__fadeInRight bg-[#333438] items-center p-10 md:w-[40%] w-[95%] justify-start mt-10 rounded-2xl flex">
                <div>
                  <i class="fa-solid fa-at text-[40px] text-[#5cc454]"></i>
                </div>
                <div className="text-start ml-5 md:ml-10">
                  <p className="text-white font-bold text-[25px]">Email</p>
                  <p className="text-[#8d8f92]">vishvaramoliya@gmail.com</p>
                </div>
              </div>

              <div className="animate__animated animate__fadeInLeft bg-[#333438] items-center p-10 md:w-[40%] w-[95%] justify-start mt-10 rounded-2xl flex">
                <div>
                  <i class="fa-solid fa-phone text-[40px] text-[#5cc454]"></i>
                </div>
                <div className="text-start ml-5 md:ml-10">
                  <p className="text-white font-bold text-[25px]">Phone</p>
                  <p className="text-[#8d8f92]">79909 66964</p>
                </div>
              </div>

              <div className="animate__animated animate__fadeInRight bg-[#333438] items-center p-10 md:w-[40%] w-[95%] justify-start mt-10 rounded-2xl flex">
                <div>
                  <i class="fa-brands fa-github text-[40px] text-[#5cc454]"></i>
                </div>
                <div className="text-start ml-5 md:ml-10">
                  <p className="text-white font-bold text-[25px]">Github</p>
                  <a className="text-[#8d8f92]" href="https://github.com/">
                    https://github.com/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="w-full flex justify-center mt-5">
            <h2 className="animate__animated animate__bounce text-5xl font-bold text-green-400">
              Contact <span className="text-white">Form</span>
            </h2>
          </div>

          <div className="animate__animated animate__fadeIn w-[100%] mt-10 flex items-center justify-center  text-white">
            <div className="w-[85%] bg-[#333438] p-8 rounded-[25px] shadow-md">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-4  bg-transparent text-white  focus:outline-none inp1 "
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-4 bg-transparent text-white  focus:outline-none inp1"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-4 bg-transparent text-white  focus:outline-none inp1"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2  text-white rounded-lg font-bold flex items-center justify-center "
                  >
                    Send Message &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

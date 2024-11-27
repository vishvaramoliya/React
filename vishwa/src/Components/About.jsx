import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="main_div w-full flex">
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

        <div className="animate__animated animate__fadeIn box box2 h-[100vh] flex flex-wrap justify-between overflow-scroll pb-10 bg-[#25262a]">
          <div className="main1 w-[100%] md:w-[50%]  overflow-scroll bg-[#25262a] text-center pt-10">
            <div>
              <h1 className="animate__animated animate__bounceIn md:text-9xl text-6xl text-[#4c4d53] font-bold opacity-30">
                ABOUT ME
              </h1>
            </div>

            <br />

            <p className="animate__animated animate__bounce text-[15px] md:text-2xl text-[#e9f5ff] font-light leading-10">
              <span className=" text-[#67ba63] font-bold">
                {" "}
                Hello, I'm a Vishwa!,
              </span>{" "}
              A passionate Full Stack Web Developer skilled in creating
              user-friendly and efficient web applications. I specialize in
              seamless UI design, scalable backends, and turning ideas into
              reality. Let’s build something amazing together!
            </p>
            <br />
            <br />
            <div className="text-center ml-10">
              <h1 className="text-[#67ba63] font-bold text-5xl">
                OUR <span className="text-white">SERVICES</span>
              </h1>
            </div>
            <br />
            <br />

            <div className="overflow-scroll">
              <div className="flex flex-wrap justify-evenly w-[100%]">
                <div className="animate__animated animate__fadeInLeft md:w-[40%] w-[90%] p-10 bg-[#38393d] rounded-2xl text-start ">
                  <i class="fa-solid fa-laptop text-[#67ba63] text-[50px]"></i>
                  <h1 className="text-white font-bold mt-4  text-[20px]">
                    Web Development
                  </h1>
                  <p className="text-[#868486] mt-3">
                    Modern and mobile-ready website that will help of your
                    marketing.
                  </p>
                </div>
                <div className="animate__animated animate__fadeInRight md:w-[40%] w-[90%] p-10 bg-[#38393d] rounded-2xl text-start mt-5 md:mt-0">
                  <i class="fa-solid fa-pen-nib text-[#67ba63] text-[50px]"></i>
                  <h1 className="text-white font-bold mt-4  text-[20px]">
                    Responsive Web Design
                  </h1>
                  <p className="text-[#868486] mt-3">
                    Modern and mobile-ready website that will help of your
                    marketing.
                  </p>
                </div>
              </div>
              <br />
              <div className="flex flex-wrap justify-evenly">
                <div className="animate__animated animate__fadeInLeft md:w-[40%] w-[90%] p-10 bg-[#38393d] rounded-2xl text-start">
                  <i class="fa-solid fa-mobile-screen-button text-[#67ba63] text-[50px]"></i>
                  <h1 className="text-white font-bold mt-4 text-[20px]">
                    Frontend Developer
                  </h1>
                  <p className="text-[#868486] mt-3">
                    Modern and mobile-ready website that will help of your
                    marketing.
                  </p>
                </div>
                <div className="animate__animated animate__fadeInRight md:w-[40%] w-[90%] p-10 bg-[#38393d] rounded-2xl text-start mt-5 md:mt-0">
                  <i class="fa-solid fa-camera-retro text-[#67ba63] text-[50px]"></i>
                  <h1 className="text-white font-bold mt-4  text-[20px]">
                    Backend Developer
                  </h1>
                  <p className="text-[#868486] mt-3">
                    Full-day or half-day photo shoots with all necessary
                    equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-[50%] sm:fixed top-0 p-10 left-[50%] h-full hidden md:w-[50%] md:flex items-center">
            <img src="public/bg2.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

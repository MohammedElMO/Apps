import * as React from "react";
import { Link } from "react-router-dom";
import video from "../assets/Desk.mp4";
import video1 from "../assets/Desk2.mp4";
import video2 from "../assets/Desk3.mp4";
import video3 from "../assets/Desk4.mp4";
import video4 from "../assets/Desk5.mp4";
import video5 from "../assets/Desk6.mp4";
import video6 from "../assets/Desk7.mp4";
import video7 from "../assets/Desk7.mp4";
const Welcome = () => {
  return (
    <section className="relative font-Poppin flex items-center justify-center flex-col w-full h-[100vh]">
      <video
        className=" object-center object-cover  w-full h-full "
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        <source src={video1} type="video/mp4" />
        <source src={video2} type="video/mp4" />
        <source src={video3} type="video/mp4" />
        <source src={video4} type="video/mp4" />
        <source src={video5} type="video/mp4" />
        <source src={video6} type="video/mp4" />
        <source src={video7} type="video/mp4" />
      </video>
      <div className="opacity-50 absolute inset-0 h-full bg-black"></div>

      <div className="flex flex-col-reverse absolute gap-3">
        <p className="text-white font-medium text-sm">
          Click To Register To Our Landing Product Page
        </p>

        <button
          className="
                    self-center
                    rounded-md
                    p-4 text-white
                    font-bold
                    hover:opacity-20
                     hover:bg-white
                    transition-all
                    duration-75
                    ease-out
                    hover:text-black border"
        >
          <Link to="/Register">Register</Link>
        </button>
      </div>
    </section>
  );
};

export { Welcome };

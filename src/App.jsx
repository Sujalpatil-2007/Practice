import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const [position, setPosition] = useState({ X: 0, Y: 0 });

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        gsap.to('.nav',{
          top:-40,
          duration:0.5,
          ease:"back.in"
        })

      } else if (currentScrollY < lastScrollY.current) {
        gsap.to('.nav',{
          top:0,
          duration:0.5,
          ease:"back.out"
        })
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", positionSet);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const positionSet = (e) => {
      

      gsap.to("#circle", {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 1.2,
        ease: "back.out",
        opacity: 1,
      });

      gsap.to("#dot", {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "back.out",
        opacity: 1,
      });
    };

    const scrollHandler = () => {
      console.log("scrolling…");
    };

    window.addEventListener("mousemove", positionSet);
    window.addEventListener("scroll", scrollHandler);

    // cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", positionSet);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <div className="nav bg-red-400 fixed h-10 w-full"></div>
      <div className="bg-[#2b2727] overflow-hidden min-h-screen w-screen">
        <div
          id="circle"
          className="border-2 border-amber-400 opacity-0 fixed rounded-full h-7 w-7"
        ></div>
        <div
          id="dot"
          className="h-2 w-2 bg-amber-300 opacity-0 fixed rounded-full"
        ></div>
      </div>
      <div className="h-screen w-full bg-rose-400"></div>
    </>
  );
};

export default App;

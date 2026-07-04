import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const navSlide = useRef();

  const move = (e) => {
    gsap.to(navSlide.current, {
      x: e.target.offsetLeft,
      width: e.target.offsetWidth,
      duration: 1,
      ease: "circ",
    });
  };

  useGSAP(() => {
    const firstLink = document.querySelector(".nav-link");
    gsap.set(navSlide.current, {
      x: firstLink.offsetLeft,
      width: firstLink.offsetWidth,
    });
  });

  return (
    <>
      <main id="Home" className="min-h-screen w-screen  bg-gray-500">
        <div className="h-10 w-full flex fixed justify-between items-center p-5 bg-amber-300/80 ">
          <div>Logo</div>
          <div className="flex justify-center items-center gap-3 relative border px-3 py-1 rounded-md ">
            <span
              ref={navSlide}
              className="h-6 w-15 absolute left-0 px-1 rounded bg-gray-300/70 "
            ></span>
            <a onMouseEnter={move} className="nav-link z-1" href="#Home">
              Home
            </a>
            <a onMouseEnter={move} className="nav-link z-1" href="#About">
              About
            </a>
            <a onMouseEnter={move} className="nav-link z-1" href="#Project">
              Project
            </a>
            <a onMouseEnter={move} className="nav-link z-1" href="#Contact">
              Contact
            </a>
          </div>
          <div>Let's Talk</div>
        </div>
      </main>
      <div id="About" className="h-screen w-screen bg-amber-400">
        <h1>About</h1>
      </div>
      <div id="Project" className="h-screen w-screen bg-amber-500">
        <h1>Projects</h1>
      </div>
      <div id="Contact" className="h-screen w-screen bg-amber-600">
        <h1>Contact</h1>
      </div>
      <h1>hii</h1>
    </>
  );
};

export default App;

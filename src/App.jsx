import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const indicator = useRef(null);

  const moveIndicator = (e) => {
    gsap.to(indicator.current, {
      x: e.target.offsetLeft,
      width: e.target.offsetWidth,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    const firstLink = document.querySelector(".nav-link");

    gsap.set(indicator.current, {
      x: firstLink.offsetLeft,
      width: firstLink.offsetWidth,
    });
  });

  return (
    <>
      <main
        id="Home"
        className="min-h-screen w-screen bg-gray-500"
      >
        <div className="fixed top-0 w-full h-14 flex justify-between items-center px-10 bg-amber-300">

          <h1 className="font-bold">Logo</h1>

          <div className="relative flex gap-6 border rounded-lg px-2 py-2">

            <span
              ref={indicator}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-8 rounded-md bg-gray-300/70"
            ></span>

            <a
              href="#Home"
              className="nav-link z-10 px-3 py-1"
              onMouseEnter={moveIndicator}
            >
              Home
            </a>

            <a
              href="#About"
              className="nav-link z-10 px-3 py-1"
              onMouseEnter={moveIndicator}
            >
              About
            </a>

            <a
              href="#Project"
              className="nav-link z-10 px-3 py-1"
              onMouseEnter={moveIndicator}
            >
              Projects
            </a>

            <a
              href="#Contact"
              className="nav-link z-10 px-3 py-1"
              onMouseEnter={moveIndicator}
            >
              Contact
            </a>
          </div>

          <button className="border px-4 py-2 rounded-md">
            Let's Talk
          </button>
        </div>
      </main>

      <section
        id="About"
        className="h-screen bg-amber-400 flex items-center justify-center text-5xl"
      >
        About
      </section>

      <section
        id="Project"
        className="h-screen bg-amber-500 flex items-center justify-center text-5xl"
      >
        Projects
      </section>

      <section
        id="Contact"
        className="h-screen bg-amber-600 flex items-center justify-center text-5xl"
      >
        Contact
      </section>
    </>
  );
};

export default App;
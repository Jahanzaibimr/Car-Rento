"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero bg-gray-500 h-screen"> {/* Full screen height and grey background */}
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-white"> {/* White text for contrast */}
          Discover, reserve, and drive a car in no time!
        </h1>

        <p className="hero__subtitle text-white"> {/* White text for contrast */}
          Simplify your car rental with our easy booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/lmb.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

import { motion } from "motion/react";
import logo from "../assets/hero-image.png";
const Hero = () => {
  return (
    <>
      <section
        role="region"
        aria-label="Hero Section"
        className="relative mx-auto w-full flex flex-col gap-[50px] lg:gap-0 lg:flex-row-reverse  items-center  lg:justify-between text-white text-center lg:text-left max-w-[1440px] p-2 md:px-16"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            animation:
              "colorChange 3s infinite alternate, borderChange 4s infinite alternate",
          }}
          src={logo}
          className="w-[475px] "
          loading="lazy"
          width={478}
          height={478}
          alt="A picture of Ahmed Kokash, a Back End Developer"
        />
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="max-w-[750px] flex flex-col sm:gap-[20px] items-center lg:items-start lg:gap-[5px]"
        >
          <h1 className=" text-2xl capitalize text-white sm:text-[48px] md:text-[64px] md:leading-[74px]">
            i am
            <span className="font-black glow-text ">
              <br className="sm:hidden" /> ahmed{" "}
              <br className="hidden md:flex" /> Kokash
            </span>
          </h1>

          <p className="bg-[#38B6FC] px-4 py-1 rounded-md text-black font-black my-4 text-base sm:text-xl">
            Web Developer {" "}
          </p>
          <p className="text-base text-[#A4A4A5] md:text-xl lg:text-2xl my-3 md:my-6">
          Backend Developer and Computer Engineering Student with a 
          <br/>strong foundation in developing backend systems for web applications, focusing on performance, security, and clean code architecture. Experienced in modern technologies like Laravel and MySQL, and skilled in building efficient, scalable APIs. Passionate about continuous learning and skill development to keep up with the fast-paced world of programming and technology.
          </p>
          <button
            aria-label="Navigate to contact section"
            className="rounded-[30px] bg-[#38B6FC] text-black py-3 px-5 text-base leading-[16px] mt-2  md:text-xl md:px-5 md:py-4 md:leading-[20px] ml-5 sm:ml-0"
          >
            <a aria-label="Go to the contact section" href="#CallMe">
              CONTACT ME
            </a>
          </button>
        </motion.div>
        <div className="animation w-[40%] h-[40%] bg-blue-400 top-[400px] right-0"></div>
      </section>
    </>
  );
};

export default Hero;

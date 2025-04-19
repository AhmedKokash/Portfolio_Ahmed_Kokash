/* eslint-disable react/prop-types */
import { SectionTitle } from "./SectionTitle";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

const EduComponent = (props) => {
  return (
    <div>
      <h3 className="text-white text-sm leading-[20px] font-bold w-[240px] sm:w-[550px] text-center mx-auto sm:text-xl">
        {props.degree}
      </h3>
      <p className="text-white text-sm leading-[20px] font-regular w-[200px] sm:w-[500px] text-center mx-auto sm:text-xl ">
        {props.university}
      </p>
    </div>
  );
};

const Education = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [spanRef, spanInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [spanRef2, spanInView2] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 520px)" });

  const data = [
    {
      degree: "Back End  Diploma with Laravel",
      university: " Maps org | 2025",
    },
    {
      degree: "Back End Diploma with Node.js express",
      university: " Syrian Geeks | 2024",
    },
    
    {
      degree: "Diploma in Programming and Graphic Design",
      university: "Midmar org | 2022",
    },
    
  ];
  return (
    <>
      <motion.section
        role="region"
        aria-label="Education Section"
        ref={sectionRef}
        initial={{ y: 100, opacity: 0 }}
        animate={sectionInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <SectionTitle title="EDUCATION" iconName="university" />
        <p className="text-[#A4A4A5] text-center text-xs leading-[20px] mt-16 mb-7 sm:text-xl sm:leading-[35px] lg:text-2xl lg:leading-[40px] mx-auto max-w-[740px] md:px-0 px-5">
        Informatics Engineering student with strong knowledge in software development, data structures, and working with AI tools, with a particular focus on backend development using Laravel and MySQL. Skilled in designing and building scalable APIs and always striving to enhance skills and improve performance in programming and system development.


        </p>

        <div className="flex flex-col gap-10 mb-5">
          {data.map((value, index) => (
            <EduComponent
              key={index}
              degree={value.degree}
              university={value.university}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-[50px] mx-auto px-4 max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] sm:mx-auto">
          <motion.span
            ref={spanRef}
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={isLargeScreen ? { x: -200 } : { x: -50 }}
            animate={spanInView ? { x: 0 } : {}}
            className="text-[35px] leading-[35px]  text-[#A4A4A5] md:text-[70px] md:leading-[70px] lg:text-[96px]"
          >
            2021
          </motion.span>

          <svg
            aria-hidden="true"
            className="my-auto"
            width="55"
            height="30"
            viewBox="0 0 55 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55 15L30 0.566243V29.4338L55 15ZM0 17.5L32.5 17.5V12.5L0 12.5L0 17.5Z"
              fill="#38B5FE"
            />
          </svg>

          <motion.span
            ref={spanRef2}
            transition={{ duration: 0.8, ease: "easeOut" }}
            initial={isLargeScreen ? { x: 200 } : { x: 50 }}
            animate={spanInView2 ? { x: 0 } : {}}
            className="text-[35px] leading-[35px] text-[#A4A4A5] md:text-[70px] md:leading-[70px] lg:text-[96px]"
          >
            2025
          </motion.span>
        </div>
        <div className="animation w-[40%] h-[40%] bg-lime-700 top-[400px]"></div>
      </motion.section>
    </>
  );
};

export default Education;

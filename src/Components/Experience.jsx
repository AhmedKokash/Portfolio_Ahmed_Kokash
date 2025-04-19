/* eslint-disable react/prop-types */
import { SectionTitle } from "./SectionTitle";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const ExpComponent = (props) => {
  const [divRef, divInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={divRef}
      transition={{ duration: 0.8, ease: "easeOut" }}
      initial={{ x: -100, opacity: 0 }}
      animate={divInView ? { x: 0, opacity: 1 } : {}}
      className="flex flex-col md:flex-row gap-5 text-center  md:text-left justify-between flex-wrap lg:flex-nowrap"
    >
      <div className="flex flex-col-reverse  md:flex-row gap-3  items-center">
        <svg  aria-hidden="true" className="icon rotate-90 md:rotate-0" width={75} height={75}>
          <use href="#doubleArrow"></use>
        </svg>
        <div>
          <h3 className="text-white font-bold text-base leading-[35px] sm:text-2xl">
            {props.postion}
          </h3>
          <h3 className="text-[#D5D5D5] font-bold text-base leading-[30px] sm:text-xl">
            {props.company}
          </h3>
        </div>
      </div>
      <p className="text-[#A4A4A5] text-xs sm:text-base max-w-[660px] md:ml-[87px] lg:mx-0 sm:mx-auto">
        {props.description}
      </p>
    </motion.div>
  );
};

const Experience = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const data = [
    // {
    //   postion: "Front End Trainer",
    //   company: "Multi Aid Programs 2024 - 2025",
    //   description:
    //     "Worked as a Fornt End trainer, teaching Trainees  technologies like HTML, CSS, React, and Figma. Responsibilities like tracking student progress, preparing reports, and participating in meetings to enhance and streamline the training process.",
    // },
    
  ];
  return (
    <>
      <motion.section
        ref={sectionRef}
        role="region"
        aria-label="Experince Section"
        initial={{ y: 100, opacity: 0 }}
        animate={sectionInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <SectionTitle title="EXPERIENCE" iconName="training" />

        <div className="md:my-24 my-16 flex flex-col gap-20 px-2 max-w-[1440px] mx-auto">
          {data.map((value, index) => (
            <ExpComponent
              key={index}
              postion={value.postion}
              company={value.company}
              description={value.description}
            />
          ))}
        </div>
        <div className="animation  w-[40%] h-[40%] bg-purple-500 top-[200px] right-0"></div>
      </motion.section>
    </>
  );
};

export default Experience;

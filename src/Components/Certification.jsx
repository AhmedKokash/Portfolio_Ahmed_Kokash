/* eslint-disable react/prop-types */
import { SectionTitle } from "./SectionTitle";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Card = ({ value }) => {
  const [divRef, divInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={divRef}
      initial={{ scale: 0 }}
      animate={divInView ? { scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" card_hover2 hover:bg-[#444] w-[250px] h-[100px] sm:w-[300px] sm:h-[150px] flex flex-col gap-2 sm:gap-8 px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]"
    >
      <h3 className="text-base text-center text-white sm:text-2xl ">
        {value.Certification}
      </h3>
      <a
        href={value.url}
        target="_blank"
        className="text-sm  font-regular text-[#A4A4A5] sm:text-xl"
      >
        {value.Company}
      </a>
    </motion.div>
  );
};

const Certification = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: isLargeScreen ? 0.2 : 0,
  });

  const data = [
    {
      Certification: "Back-End Diploma with Laravel",
      Company: "Maps org",
      url: "##",
    },
    {
      Certification: "Back-End Diploma with express",
      Company: "Syrian Geeks",
      url: "##",
    },
    
    
    

  ];
  return (
    <motion.section
      role="region"
      aria-label="Certification Section"
      ref={sectionRef}
      initial={{ y: 100, opacity: 0 }}
      animate={sectionInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SectionTitle title="CERTIFICATION" iconName="certification" />
      <div className="mt-20 md:mt-24 px-5 flex flex-wrap gap-7 justify-center lg:max-w-[1000px] mx-auto ">
        {data.map((value, index) => (
          <Card key={index} value={value} />
        ))}
      </div>
    </motion.section>
  );
};

export default Certification;

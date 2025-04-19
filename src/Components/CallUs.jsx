/* eslint-disable react/prop-types */
import { SectionTitle } from "./SectionTitle";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
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
      className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]"
    >
      <svg
        aria-hidden="true"
        className="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]"
      >
        <use href={`#${props.name}`}></use>
      </svg>
      <h3 className="text-base capitalize  font-black text-white sm:text-[28px]">
        {props.name}
      </h3>
      <p className="text-sm text-center font-regular text-[#A4A4A5] sm:text-xl  ">
        <a target="_blank" href={props.link}>
          {props.username}
        </a>
      </p>
    </motion.div>
  );
};

const CallUs = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const data = [
    {
      name: "whatsapp",
      username: "+3526811#####",
      link: "https://wa.me/3526811#####",
    },
    {
      name: "telegram",
      username: "@Ahmed_ko",
      link: "https://t.me/Ahmed_ko",
    },
    {
      name: "location",
      username: "Syria Aleppo",
      link: "#",
    },

    {
      name: "linkedin",
      username: "Ahmed Kokash",
      link: "www.linkedin.com/in/ahmed-kokash",
    },
    {
      name: "github",
      username: "AhmedKokash",
      link: "https://github.com/AhmedKokash",
    },
    {
      name: "email",
      username: "Email me",
      link: "mailto:ahmedkokash174@gmail.com",
    },
  ];
  return (
    <motion.section
      role="region"
      aria-label="Call us Section"
      ref={sectionRef}
      initial={{ y: 100, opacity: 0 }}
      animate={sectionInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="CallMe"
      className="relative"
    >
      <SectionTitle title="GET IN TOUCH" iconName="call_us" />
      <div className="px-5 mt-20 md:mt-24 flex flex-wrap gap-7 justify-center lg:max-w-[800px] mx-auto ">
        {data.map((item, id) => (
          <Card
            key={id}
            name={item.name}
            link={item.link}
            username={item.username}
          />
        ))}
      </div>
      <div className="animation  w-[40%] h-[40%] bg-pink-600 top-[200px] ml-[20%]"></div>
    </motion.section>
  );
};

export default CallUs;

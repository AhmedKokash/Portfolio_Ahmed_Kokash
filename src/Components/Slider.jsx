import img1 from "../assets/ProjectsImages/img-1.png";
import img2 from "../assets/ProjectsImages/img-2.png";
const CardSlider = () => {
  const projectsData = [
    {
      id: 1,
      name: "hotel",
      description:
        "Hotel Management System with Laravel and Jetstream, handling room bookings and user roles.",
      alt: "Screenshot of a contact form project using Laravel and Jetstream.",

      image: img1,
      url: "https://github.com/AhmedKokash/hotel_project",
    },
    
    {
      id: 2,
      name: "Task-management-system",
      description:
        "Task-management-system with Laravel ",
      alt: "Screenshot of a contact form project using Laravel and Jetstream.",

      image: img2,
      url: "https://github.com/AhmedKokash/Task-management-system",
    },
    
    
    
  ];

  return (
    <div className="mt-[90px] flex flex-col items-center  bg-[#2B2B2B]  h-[390px]  sm:h-[450px] justify-center ">
      <div className=" relative w-full max-w-[1440px] overflow-x-auto snap-x snap-mandatory flex gap-10  hide-scrollbar">
        {projectsData.map((card) => (
          <div
            key={card.id}
            className="shrink-0 w-[250px] h-[300px] sm:w-[300px] sm:h-[390px]  flex6 flex-col items-center bg-[#414852] rounded-[25px] overflow-hidden shadow-lg backdrop-blur-md  snap-center"
          >
            <img
              src={card.image}
              alt={card.alt}
              loading="lazy"
              width={300}
              height={200}
              className="w-full object-cover h-[150px] sm:h-[200px] mb-5"
            />
            <div className="text-center h-[150px] sm:h-[190px] flex px-2 pb-5 flex-col justify-around">
              <h2 className="font-inter text-white capitalize text-base sm:text-2xl font-bold">
                {card.name}
              </h2>
              <p className="text-[#B4B6C1] leading-[24px]  text-xs sm:text-base font-medium">
                {card.description}
              </p>

              <a
                className="font-inter text-xl sm:text-[30px] text-[#44A9F8]   hover:bg-opacity-10 hover:text-blue-300 transition"
                target="_blank"
                href={card.url}
              >
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;

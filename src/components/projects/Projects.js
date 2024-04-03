import React from "react";
import Title from "../layouts/Title";
import {
  farmjoint,
  carrental,
  flight,
  eventTicketing,
  gym,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const gitHubUrl = "https://github.com/bykezz?tab=repositories";
  const farmjointUrl = "https://test.farmjoint.co/";
  const farmjointGitUrl = "https://github.com/bykezz/FARM-JOINT";
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY GITHUB AND LEAVE YOUR FEEDBACK"
            des="My Projects"
          />
        </div>{" "}
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FARM JOINT"
          des=" An agro value chain platform development by the Tech team at Seven Star 
          Consultants Limited to enhance the productivity of the agricultural system in Nigeria!"
          src={farmjoint}
          href={farmjointUrl}
          hrefGit={farmjointGitUrl}
        />
        <ProjectsCard
          title="CAR RENTAL"
          des="Experience the freedom of travel with my Car Rental Web App. From compact cars to spacious SUVs, 
          find the perfect vehicle for your journey and hit the road with confidence!"
          src={carrental}
        />
        <ProjectsCard
          title="Dashboard"
          des="Access your personalized dashboard to stay connected effortlessly, Enjoy seamless real-time Data, Reports, 
            a user-friendly interface, and secure Transactions!"
          src={carrental}
        />
        <ProjectsCard
          title="GYM BUDDY"
          des="Elevate your fitness journey with the Gym Buddy app. Track your workouts, set goals, 
          and stay motivated on your path to a healthier lifestyle. Gym Buddy is your ultimate fitness companion!"
          src={gym}
        />
        <ProjectsCard
          title="FLIGHT BOOKING"
          des="Plan your travels with ease using my Flight Booking platform. From searching for the best deals to 
          securing your seat, the platform ensures a smooth and stress-free booking process!"
          src={flight}
        />
        <ProjectsCard
          title="EVENT TICKETING APP"
          des=" Discover, book, and attend events effortlessly with my Event Ticketing App! Streamline your
           event experience with a user-friendly interface, comprehensive calendar, and exclusive perks! "
          src={eventTicketing}
        />
      </div>
    </section>
  );
};

export default Projects;

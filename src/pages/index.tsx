import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
// Import layouts
import Body from "components/layouts/Body";
import Navbar from "components/layouts/Navbar";

const LaunchDynamic = dynamic(() => import("components/sections/Launch"));
const ExperienceDynamic = dynamic(
  () => import("components/sections/Experience")
);
const SkillDynamic = dynamic(() => import("components/sections/Skill"));
const ProjectDynamic = dynamic(() => import("components/sections/Project"));

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const handleHamburgerAction = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className='home__content'>
      <Body>
        <Navbar
          isOpen={hamburgerOpen}
          handleHamburgerAction={handleHamburgerAction}
        />
        <LaunchDynamic setIsLoading={setIsLoading} />
        <ExperienceDynamic />
        <SkillDynamic />
        <ProjectDynamic />
      </Body>
    </div>
  );
};

export default Home;

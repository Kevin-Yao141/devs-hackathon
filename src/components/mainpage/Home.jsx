import React, { useContext, useState } from "react";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import { PageContext } from "../../App";
import SearchPage from "./SearchPage";
import WorkoutsPage from "./WorkoutsPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";

const Home = () => {
  const { page } = useContext(PageContext);

  return (
    <div className="w-[90vw] h-[90vh] flex lg:flex-col border-2">
      <SideBar />
      {page == "home" && <HomePage />}
      {page == "search" && <SearchPage />}
      {page == "workout" && <WorkoutsPage />}
      {page == "profile" && <ProfilePage />}
      {page == "settings" && <SettingsPage />}
    </div>
  );
};

export default Home;

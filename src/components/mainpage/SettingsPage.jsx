import React from "react";
import Profile from "../portfoliopage/Profile";
import { UserContext } from "../../App";
import { fetchUserData } from "../../utils/fetchUserData";


const SettingsPage = () => {
  const { user } = React.useContext(UserContext);
  const userdata = fetchUserData(user.email);
  const email = userdata.email;



  return (
    <main>
    <p>{email}</p>
    </main>
  );
};


        export default SettingsPage;

import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToCreateUserPage = () => {
    navigate("/createUser"); // Navigates to the Create User page
  };

  return (
    <div>
      <a href="aboutUs">More info</a>
      <div>
        This is Memory Game. A 2 player game where the one who can remember more
        things, win!
      </div>
      <button onClick={goToCreateUserPage}>Create your user</button>
    </div>
  );
};

export default HomePage;

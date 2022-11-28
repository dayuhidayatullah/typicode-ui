import React, { useEffect } from "react";
import Header from "../components/Header";
import ImageLanding from "../assets/landing.jpeg";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("username")) navigate("/home");
  }, []);
  return (
    <div className="container">
      <Header page="landing"></Header>
      <div className="content-landing">
        <img src={ImageLanding} width="100%"></img>
      </div>
    </div>
  );
}

export default Landing;

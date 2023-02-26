import React from "react";
import HeaderLayout from "../Components/HeaderLayout";
import BannerLayout from "../Components/BannerLayout";
import Carrousel from "../Components/Carrousel";
import SobreLayout from "../Components/SobreLayout";

const Home = () => {
  return (
    <>
      <HeaderLayout /> <BannerLayout /> <Carrousel /> <SobreLayout />
    </>
  );
};

export default Home;

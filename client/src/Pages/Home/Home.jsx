import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Homemainbar from "../../components/HomeMainbar/HomeMainbar";

function Home() {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;

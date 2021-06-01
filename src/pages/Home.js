import React from "react";
import BigWindow from "../components/BigWindow";
import TopPicks from "../components/TopPicks";
import Banner from "../components/Banner";
import NewArrivals from "../components/NewArrivals";
import SecondBanner from "../components/SecondBanner";
import BestSellers from "../components/BestSellers";
import ThirdBanner from "../components/ThirdBanner";
import Newsletter from "../components/Newsletter";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <BigWindow />
      <TopPicks />
      <Banner />
      <NewArrivals />
      <SecondBanner />
      <BestSellers />
      <ThirdBanner />
      <Newsletter />
    </div>
  );
}

export default Home;

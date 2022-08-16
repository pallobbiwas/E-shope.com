import React, { createContext, useState } from "react";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import SubBanner from "../components/home/SubBanner";
import Footer from "../components/share/Footer";
import Header from "../components/share/Header";

export const CreateContext = createContext("default value");

const Home = () => {
    let [isOrder, setIsOrder] = useState(0);
    console.log(isOrder);
  return (
    <div>
      <CreateContext.Provider value={[isOrder, setIsOrder]}>
        <Header>
          <Banner />
          <SubBanner />
          <Products />
          <Footer />
        </Header>
      </CreateContext.Provider>
    </div>
  );
};

export default Home;

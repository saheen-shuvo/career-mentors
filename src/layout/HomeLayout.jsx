import React from "react";
import Header from "../components/Header";
import Banner from "./Banner";
import Category from "../pages/Category";
import OurTeam from "../components/OurTeam";
import Success from "../components/Success";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-11/12 mx-auto">
        <Header></Header>
      </header>
      <nav></nav>
      <main className="w-11/12 mx-auto">
      <Outlet></Outlet>

      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;

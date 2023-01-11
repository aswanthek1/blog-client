import React from "react";
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="font-bold text-2xl text-center mt-2">All Blogs</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4">
        <Card />
      </div>
    </div>
  );
};

export default HomePage;

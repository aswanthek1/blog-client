import React, { useEffect, useState } from "react";
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import axios from "../services/axios";
import CreateIcon from "../components/Icons/CreateIcon";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/blog/allBlog").then((response) => {
      console.log(response);
      setBlogs(response.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="font-bold text-2xl text-center mt-2">All Blogs</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4">
        {blogs.map((blog) => {
          return <Card blog={blog} key={blog._id} />;
        })}
      </div>
      <div
        onClick={() => {
          navigate("/create");
        }}
        className="fixed left-[43%]  md:left-[91%]  bottom-[61px] cursor-pointer "
      >
        <CreateIcon />
      </div>
    </div>
  );
};

export default HomePage;

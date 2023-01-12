import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import HomeIcon from "../components/Icons/HomeIcon";
import axios from "../services/axios";

const ShowBlogPage = () => {
  const [showBlog, setShowBlog] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/blog/getBlog/${id}`).then((response) => {
      setShowBlog(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex md:flex-row flex-col mt-7 px-6 md:px-14 py-6 gap-9">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="fixed cursor-pointer"
        >
          <HomeIcon />
        </div>
        <div className="flex flex-col gap-16 px-6 md:px-36 w-full ">
          <h1 className="text-center text-4xl font-bold text-red-400 ">
            {showBlog?.tittle}
          </h1>
          <p className=" font-serif text-justify text-[20px] text-[#767676] ">
            {showBlog?.content}
          </p>
          <h1 className="text-2xl font-bold text-red-400">
            By: {showBlog?.author}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogPage;

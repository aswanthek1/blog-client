import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "../../services/axios";
import HomeIcon from "../Icons/HomeIcon";
import TickIcon from "../Icons/TickIcon";

const BlogArea = () => {
  const [blogContent, setBlogContent] = useState({
    tittle: "",
    content: "",
    author: "",
  });
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (
      blogContent?.tittle.trim() === "" ||
      blogContent?.content.trim() === "" ||
      blogContent?.author.trim() === ""
    ) {
      toast.error("All Fields are mandatory", {
        style: {
          width: "400px",
          fontSize: "18px",
          fontWeight: 700,
          backgroundColor: "palegreen",
          color: "black",
          fontFamily: "sans-serif",
        },
      });
    } else if (
      blogContent.tittle.length > 30 ||
      blogContent.tittle.length < 3
    ) {
      toast.error("Tittle can have minimum 3 and maximum 30 charachters", {
        style: {
          width: "400px",
          fontSize: "18px",
          fontWeight: 700,
          backgroundColor: "palegreen",
          color: "black",
          fontFamily: "sans-serif",
          textAlign: "center",
        },
      });
    } else {
      axios
        .post("/blog/addBlog", blogContent)
        .then((response) => {
          console.log("response of api", response);
          setBlogContent({ tittle: "", content: "", author: "" });
          toast.success("Your blog is successfully created", {
            style: {
              width: "400px",
              fontSize: "18px",
              fontWeight: 700,
              backgroundColor: "palegreen",
              color: "black",
              fontFamily: "sans-serif",
            },
          });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="flex gap-8 p-8 md:flex-row flex-col">
      <div className=" flex-row flex gap-2 md:flex-col w-24  ">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon />
        </div>
        <div onClick={handleSubmit} className="cursor-pointer">
          <TickIcon blogContent={blogContent} setBlogContent={setBlogContent} />
        </div>
      </div>
      <div className=" flex items-center flex-col  border-4 w-full h-full p-4 gap-10">
        <input
          name="title"
          value={blogContent?.tittle}
          onChange={(event) => {
            setBlogContent({ ...blogContent, tittle: event.target.value });
          }}
          placeholder="Tittle..."
          className="text-2xl text-center focus:outline-none w-full"
        />
        <hr />
        <textarea
          name="content"
          id=""
          value={blogContent?.content}
          onChange={(event) => {
            setBlogContent({ ...blogContent, content: event.target.value });
          }}
          placeholder="Type about the topic..."
          className="w-full p-4 h-[350px] focus:outline-none resize-none"
        ></textarea>
        <div className="flex justify-start w-full">
          <input
            className="focus:outline-none pl-4"
            placeholder="Enter your name here ..."
            type="text"
            name="author"
            id=""
            value={blogContent.author}
            onChange={(event) => {
              setBlogContent({ ...blogContent, author: event.target.value });
            }}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default BlogArea;

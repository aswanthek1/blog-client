import React, { useState } from "react";
import axios from "../../services/axios";
import HomeIcon from "../Icons/HomeIcon";
import TickIcon from "../Icons/TickIcon";

const BlogArea = () => {
  const [blogContent, setBlogContent] = useState({ tittle: "", content: "" });
  const handleSubmit = () => {
    if (
      blogContent?.tittle.trim() === "" ||
      blogContent?.content.trim() === ""
    ) {
      console.log("typw some thing please");
    } else {
      axios
        .post("/blog/addBlog", blogContent)
        .then((response) => {
          console.log("response of api", response);
          setBlogContent({tittle:'', content:''})
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="flex gap-8 p-8 md:flex-row flex-col">
      <div className=" flex-row flex gap-2 md:flex-col w-24  ">
        <div>
          <HomeIcon />
        </div>
        <div onClick={handleSubmit}>
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
          className="text-2xl text-center focus:outline-none"
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
          className="w-full p-4 h-[400px] focus:outline-none "
        ></textarea>
      </div>
    </div>
  );
};

export default BlogArea;

import React, { useEffect, useState } from "react";
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import axios from "../services/axios";
import CreateIcon from "../components/Icons/CreateIcon";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState(0);
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/blog/allBlog").then((response) => {
      setTotal(response.data);
    });
    makePaginte();
  }, []);

  const makePaginte = () => {
    setPages(pages + 1);
    console.log(pages + 1);
    const correctPage = pages + 1;
    if (pages >= 0) {
      axios.get(`/blog/getBlogsByPaginage/${correctPage}`).then((response) => {
        setBlogs(response.data);
      });
    } else {
      console.log("cant do increment");
    }
  };
  const makePaginatePrevious = () => {
    setPages(pages - 1);
    console.log(pages - 1);
    const correctPage = pages - 1;
    if (pages >= 0) {
      axios.get(`/blog/getBlogsByPaginage/${correctPage}`).then((response) => {
        setBlogs(response.data);
      });
    } else {
      console.log("cant do decrement");
    }
  };

  return (
    <div>
      <Header />
      <div className="font-bold text-2xl text-center mt-4">All Blogs</div>
      <div className="flex justify-between px-7 font-bold text-gray-700 mt-8">
        <div>
          Total blogs: {blogs?.length} of {total?.length}
        </div>
        <div>Page number: {pages}</div>
      </div>
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
      <div className="flex justify-between px-9 mt-9">
        {pages > 1 ? (
          <button
            onClick={() => {
              makePaginatePrevious();
            }}
            className="border-2 p-1 w-[80px] bg-slate-200 rounded-md font-bold"
          >
            Previous
          </button>
        ) : (
          ""
        )}

        <div></div>

        {blogs.length === 0 ? (
          <p className="text-2xl text-gray-500 font-bold">
            No more blogs go previous page
          </p>
        ) : (
          <button
            onClick={() => {
              makePaginte();
            }}
            className="border-2 p-1 w-[80px] bg-slate-200 rounded-md font-bold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate(`/blog/${blog?._id}`)}
        className="md:w-[300px] w-[280px] bg-[#D9D9D9] h-[180px] rounded-[15px] mx-auto my-[30px] flex flex-col justify-center items-center font-bold font-sans text-gray-600"
      >
        {blog?.tittle}
      </div>
    </div>
  );
};

export default Card;

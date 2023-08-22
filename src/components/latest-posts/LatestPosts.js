import { useNavigate } from "react-router-dom";
import { apiGetAllPost } from "../../services/api/posts";
import React, { useState, useEffect } from "react";

const LatestPosts = () => {
  const [latestPost, setLatestPost] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    apiGetAllPost()
      .then((response) => {
        setLatestPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const threeLatestPosts = latestPost.slice(-3);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[32px] font-medium flex py-[48px] px-[32px] justify-left text-[#d70018]">
          Bài viết mới
        </h1>
        <p
          onClick={() => {
            navigate("/post");
          }}
          className=" items-center text-xl mt-16 mr-8 text-[#d70018] cursor-pointer hover:underline"
        >
          Xem tất cả
        </p>
      </div>
      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {threeLatestPosts?.reverse().map((post, index) => (
          <div key={index}>
            <div className="h-[100%] rounded-lg border border-solid border-[#ccc]">
              <img
                onClick={() => navigate(`/post/${post?.id}`)}
                src={post?.url}
                alt={post?.url}
                className="rounded-lg cursor-pointer !w-[382px] !h-[214px]"
              />
              <div className="flex flex-col">
                <h1
                  onClick={() => navigate(`/post/${post?.id}`)}
                  className="text-md font-medium text-[#505050] hover:text-[#d70018] cursor-pointer mx-4 my-2"
                >
                  {post?.title}
                </h1>
                <p className="self-end rounded-lg px-4 py-2 mx-4 my-2 bg-gray-300 bg-[#f7f7f7] text-[#505050]">
                  {post?.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LatestPosts;

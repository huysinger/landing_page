import Header, { menuHeader } from "../../components/headers/Header";
import { Helmet } from "react-helmet";
import { apiGetAllPost } from "../../services/api/posts";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { AiOutlineHome } from "react-icons/ai";
import Footer from "../../components/footer/Footer";

const PostPage = (userInfo) => {
  const navigate = useNavigate();
  const [allPost, setAllPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();
  const getAllPost = async () => {
    const data = await apiGetAllPost();
    setAllPost(data?.data);
  };
  const setOfCategory = [...new Set(allPost?.map((post) => post.category))];
  useEffect(() => {
    getAllPost();
  }, []);
  function getFilteredList() {
    if (!selectedCategory) {
      return allPost;
    }
    return allPost?.filter((post) => post.category === selectedCategory);
  }
  const filteredList = useMemo(getFilteredList, [selectedCategory, allPost]);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <div>
      <Helmet>
        <title>Tin Tức</title>
      </Helmet>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <button
        onClick={() => navigate("/post/add")}
        className="mt-20 ml-40 px-4 py-2 rounded bg-[#d70018] text-white"
      >
        Add
      </button>
      <div className="px-[10%] flex">
        <div className="left-sidebar w-1/6 mt-8 border border-solid border-[#ccc] rounded-xl">
          <div>
            <button
              onClick={handleCategoryChange}
              className="items-center flex m-4 group relative border-gray-200 border border-solid p-2 rounded hover:bg-gray-200 focus:bg-gray-200 hover:cursor-pointer"
            >
              <AiOutlineHome className="mr-2" />
              Tất Cả
            </button>
            {setOfCategory?.map((val, index) => (
              <button
                key={index}
                onClick={handleCategoryChange}
                className="items-center flex m-4 group relative border-gray-200 border border-solid p-2 rounded hover:bg-gray-200 focus:bg-gray-200 hover:cursor-pointer"
                value={val}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
        <div className="right-content pl-10">
          {filteredList?.toReversed().map((post, index) => (
            <div
              key={index}
              className="flex my-8 rounded-xl border-solid border border-[#ccc]"
            >
              <img
                onClick={() => navigate(`/post/${post?.id}`)}
                src={post?.url}
                alt={post?.url}
                className="aspect-auto rounded-xl lg:aspect-none lg:h-48 cursor-pointer"
              />
              <div className="flex flex-col justify-between">
                <h1
                  onClick={() => navigate(`/post/${post?.id}`)}
                  className="mx-4 my-2 text-2xl font-medium text-[#505050] hover:text-[#d70018] cursor-pointer"
                >
                  {post?.title}
                </h1>
                <p className="m-4 self-end p-2 rounded-xl bg-[#f7f7f7] hover:text-black text-[#505050] cursor-pointer">
                  {post?.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PostPage;

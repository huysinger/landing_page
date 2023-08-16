import Header, { menuHeader } from "../../components/headers/Header";
import { Helmet } from "react-helmet";
import { apiReadDetailPost, apiRemovePost } from "../../services/api/posts";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = (userInfo) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailPost, setDetailPost] = useState(null);
  const readDetailPost = async () => {
    try {
      if (id) {
        const data = await apiReadDetailPost(id);
        setDetailPost(data?.data);
      }
    } catch (error) {
      navigate("/post");
    }
  };
  const onHandleDeletePost = async (id) => {
    try {
      await apiRemovePost(id);
      navigate("/post");
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    readDetailPost();
  }, detailPost);

  return (
    <div>
      <Helmet>
        <title>{detailPost?.title}</title>
      </Helmet>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <div className="py-[56px] px-[10%]">
        <div>
          <button
            onClick={() => navigate(`/post/edit/${detailPost?.id}`)}
            className="ml-10 mt-4 px-4 py-2 rounded bg-yellow-500 text-white"
          >
            Edit
          </button>
          <button
            onClick={() => onHandleDeletePost(detailPost?.id)}
            className="ml-10 mt-4 px-4 py-2 rounded bg-[#d70018] text-white"
          >
            Delete
          </button>
        </div>
        <div className="flex flex-col m-8 rounded-xl border-2 border-solid border-[#ccc]">
          <div className="mx-12 my-6">
            <p className=" p-2 rounded-xl bg-[#f7f7f7] hover:text-black text-[#505050] cursor-pointer">
              {detailPost?.category}
            </p>
            <h1 className="my-4 font-bold text-3xl text-[#4d4d4d]">
              {detailPost?.title}
            </h1>
            <p className="my-4 text-gray-500">{detailPost?.date}</p>
            <h2 className="my-4 text-xl font-medium">{detailPost?.content1}</h2>
            <p className="my-8 text-lg">{detailPost?.content2}</p>
            <img
              src={detailPost?.url}
              alt="img"
              className="m-auto"
            />
            <p className="text-lg my-8">{detailPost?.content3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetail;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  apiAddPost,
  apiEditPost,
  apiReadDetailPost,
} from "../../services/api/posts";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Header, { menuHeader } from "../../components/headers/Header";

const PostForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const readDetailPost = async () => {
    try {
      if (id) {
        const data = await apiReadDetailPost(id);
        reset(data?.data);
      }
    } catch (error) {
      navigate("/post");
    }
  };
  useEffect(() => {
    readDetailPost();
  }, []);
  const handleRemove = () => {
    document.querySelector(".url-input").value = "";
  };
  const onSubmit = async (data) => {
    if (data?.id) {
      apiEditPost(data);
    } else {
      apiAddPost(data);
    }
    navigate(`/post/${id}`);
  };
  let date = new Date().toLocaleDateString("vi-VN");
  return (
    <div>
      <Header menu={menuHeader} />
      <div>
        <div className="min-h-screen p-6 pt-20 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <form
                method=""
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
              >
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Thêm/sửa bài viết</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="name">Tiêu đề</label>
                        <input
                          {...register("title", { required: true })}
                          type="text"
                          name="title"
                          id="title"
                          placeholder="Title"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="content1">Nội dung 1</label>
                        <textarea
                          {...register("content1", { required: true })}
                          name="content1"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Content1"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="content2">Nội dung 2</label>
                        <textarea
                          {...register("content2", { required: true })}
                          name="content2"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Content2"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="url">Url ảnh</label>
                        <div className="h-10 bg-gray-50 flex rounded items-center mt-1">
                          <input
                            {...register("url", { required: true })}
                            name="url"
                            placeholder="url"
                            className="url-input px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                          <button
                            onClick={handleRemove}
                            tabIndex={-1}
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          >
                            <svg
                              className="w-4 h-4 mx-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line
                                x1={18}
                                y1={6}
                                x2={6}
                                y2={18}
                              />
                              <line
                                x1={6}
                                y1={6}
                                x2={18}
                                y2={18}
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="content3">Nội dung 3</label>
                        <textarea
                          {...register("content3", { required: true })}
                          name="content3"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Content3"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="category">Chủ đề</label>
                        <select
                          name="category"
                          {...register("category", { required: true })}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        >
                          <option value="Công nghệ">Công Nghệ</option>
                          <option value="Games">Games</option>
                        </select>
                      </div>
                      {location.pathname == "/post/add" && (
                        <div className="md:col-span-2">
                          <label htmlFor="date">Thời gian</label>
                          <input
                            {...register("date", { required: true })}
                            type="text"
                            name="date"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Date"
                            value={date}
                          />
                        </div>
                      )}

                      <div className="md:col-span-5 mt-2 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-[#d70018] hover:bg-[#df3346] text-white font-bold py-2 px-4 rounded">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostForm;

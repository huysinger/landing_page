import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  apiAddProduct,
  apiEditProduct,
  apiReadDetailProduct,
} from "../../services/api/products";
import { useNavigate, useParams } from "react-router-dom";
import Header, { menuHeader } from "../../components/headers/Header";

const ProductForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const readDetailProduct = async () => {
    try {
      if (id) {
        const data = await apiReadDetailProduct(id);
        reset(data?.data);
      }
    } catch (error) {
      navigate("/product");
    }
  };
  useEffect(() => {
    readDetailProduct();
  }, []);
  const handleRemove = () => {
    document.querySelector(".url-input").value = "";
  };
  const onSubmit = async (data) => {
    if (data?.id) {
      apiEditProduct(data);
    } else {
      apiAddProduct(data);
    }
    navigate("/product");
  };
  return (
    <div>
      <Header menu={menuHeader} />
      <div>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <form
                method=""
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
              >
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Thêm/sửa sản phẩm</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="name">Tên sản phẩm</label>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          name="name"
                          id="name"
                          placeholder="name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="description">Miêu tả</label>
                        <input
                          {...register("description", { required: true })}
                          type="text"
                          name="description"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="description"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="category">Category</label>
                        <input
                          {...register("category", { required: true })}
                          type="text"
                          name="category"
                          id="category"
                          placeholder="category"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="price">Giá</label>
                        <input
                          {...register("price", { required: true })}
                          type="text"
                          name="price"
                          id="price"
                          placeholder="price"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="url">Url ảnh</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            {...register("url", { required: true })}
                            name="url"
                            placeholder="url"
                            className="url-input px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                          <input
                            {...register("likes", {
                              valueAsNumber: true,
                            })}
                            value={0}
                            name="likes"
                            className="hidden"
                          />
                          <input
                            {...register("order", {
                              valueAsNumber: true,
                            })}
                            value={0}
                            name="order"
                            className="hidden"
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

export default ProductForm;

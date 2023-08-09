import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { apiEditUser, apiReadDetailUser } from "../../services/api/users";
import { useNavigate, useParams } from "react-router-dom";
import Header, { menuHeader } from "../../components/headers/Header";

const InfoForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const readDetailUser = async () => {
    try {
      if (id) {
        const data = await apiReadDetailUser(id);
        reset(data?.data);
      }
    } catch (error) {
      navigate("/");
    }
  };
  useEffect(() => {
    readDetailUser();
  }, []);
  const onSubmit = async (data) => {
    apiEditUser(data);
    navigate(`/info/${id}`);
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
                    <p className="font-medium text-lg">Chỉnh sửa thông tin</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="name">Tên người dùng</label>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="email">Email</label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          name="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Email"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="password">Password</label>
                        <input
                          {...register("password", { required: true })}
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
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
export default InfoForm;

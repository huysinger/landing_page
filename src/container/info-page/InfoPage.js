import Header, { menuHeader } from "../../components/headers/Header";
import { apiReadDetailUser } from "../../services/api/users";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const InfoPage = (userInfo) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailUser, setDetailUser] = useState(null);

  const readDetailUser = async () => {
    try {
      if (id) {
        const data = await apiReadDetailUser(id);
        setDetailUser(data?.data);
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    readDetailUser();
  }, []);

  return (
    <div>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <form
              method=""
              className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
            >
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-2xl">Thông tin tài khoản</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-4 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-4">
                      <p className="text-lg">
                        Tên: <strong>{detailUser?.name}</strong>
                      </p>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-lg">
                        Email: <strong>{detailUser?.email}</strong>
                      </p>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-lg">
                        Password: <strong>*********</strong>
                      </p>
                    </div>
                    <div className="md:col-span-5 mt-2 text-right">
                      <div className="inline-flex items-end">
                        <button
                          onClick={() => navigate(`/edit/${detailUser?.id}`)}
                          className="mx-4 bg-[#d70018] hover:bg-[#df3346] text-white font-bold py-2 px-4 rounded"
                        >
                          Chỉnh sửa
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
  );
};
export default InfoPage;

import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { SiZalo } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white border-t border-solid mt-10 border-gray-300">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="grid grid-cols-2 mx-[10%] gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">
              Tổng đài hỗ trợ miễn phí
            </h2>
            <ul className="text-black text-sm">
              <li className="mb-4">
                <p className="hover:underline">
                  Gọi mua hàng 1800.2097 (7h30 - 22h00)
                </p>
              </li>
              <li className="mb-4">
                <p className="hover:underline">
                  Gọi khiếu nại 1800.2063 (8h00 - 21h30)
                </p>
              </li>
              <li className="mb-4">
                <p className="hover:underline">
                  Gọi bảo hành 1800.2064 (8h00 - 21h00)
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">
              Thông tin và chính sách
            </h2>
            <ul className="text-black text-sm">
              <li className="mb-4">
                <p
                  onClick={() => {
                    navigate("/about");
                  }}
                  className=" hover:underline cursor-pointer"
                >
                  About us
                </p>
              </li>
              <li className="mb-4">
                <p className=" hover:underline cursor-pointer">Tuyển dụng</p>
              </li>
              <li className="mb-4">
                <p className=" hover:underline cursor-pointer">
                  Trung tâm bảo hành chính hãng
                </p>
              </li>
              <li className="mb-4">
                <p
                  onClick={() => {
                    navigate("/post");
                  }}
                  className=" hover:underline cursor-pointer"
                >
                  Tin tức
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">
              Legal
            </h2>
            <ul className="text-black text-sm">
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:underline"
                >
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:underline"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">
              Kết nối với chúng tôi
            </h2>
            <ul className="text-black text-sm tracking-wide">
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#d70018] flex items-center"
                >
                  <AiFillFacebook /> &nbsp; Facebook
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#d70018] flex items-center"
                >
                  <AiFillYoutube /> &nbsp; Youtube
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#d70018] flex items-center"
                >
                  <BiLogoTiktok /> &nbsp; Tiktok
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#d70018] flex items-center"
                >
                  <SiZalo /> &nbsp; Zalo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-[#f8f8f8] md:flex md:items-center md:justify-between">
          <span className="text-sm text-black sm:text-center">
            © 2023 All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.png";
import camera from "../assets/camera.png";

function Dashboard() {
  const { token, logout } = useAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    const fetchUser = async () => {
      const res = await axios.get(
        "https://popx-assignment-crey.onrender.com/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(res.data);
    };
    fetchUser();
  }, [token, navigate]);

  return (
    <div className="flex justify-center items-center bg-white min-h-screen">
      <div className="w-[375px] h-[700px] bg-[#F7F8F9] flex flex-col px-5">
        <div className="bg-white w-[375px]  h-[80px]  -left-5 relative">
          <h1 className="text-[28px] font-bold text-[#1D2226] mb-8 mt-5 ml-6">
            Account Settings
          </h1>
        </div>
        <div className="flex-col flex mt-10 gap-4">
          <div className="flex-row flex">
            <img src={image} alt="photo" className="w-20 h-20" />
            <img
              src={camera}
              alt="photo"
              className="w-6 h-6 relative -left-4 top-13"
            />
            {user && (
              <div>
                <p className="text-[#1D2226] text-[20px] font-bold">
                  {user.name}
                </p>
                <p>{user.email}</p>
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-[16px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="mt-7 outline-1 outline-gray-500 outline-dashed w-[370px] -left-4 relative" />
        <button
          className="w-[335px] top-[640px] bg-[#6C25FF] text-white text-sm font-medium py-3 rounded-md mt-4 cursor-pointer absolute"
          onClick={() => {
            setUser(null);
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;

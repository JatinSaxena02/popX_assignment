import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Register = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    agency: "no",
  });
  const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await axios.post(
        "https://popx-assignment-sz6n.onrender.com/register",
        form
      );
      login(res.data.token);
      // alert("Registered successfully!");
      navigate("/me");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center bg-white min-h-screen">
      <div className="w-[375px] h-[700px] bg-[#F7F8F9] p-6 flex flex-col">
        <h1 className="text-[28px] font-bold text-[#1D2226] mb-9">
          Create your <br /> PopX account
        </h1>

        {/* Content Form */}
        <form className="flex-1 space-y-8" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <label className="absolute top-0 left-2 -translate-y-3/5 bg-[#F7F8F9] pl-2 pr-2 text-sm font-medium text-[#6C25FF] mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              required
              onChange={handleChange}
              value={form.name}
              name="name"
              type="text"
              placeholder="Marry Doe"
              className="w-full border-[2px] border-[#CBCBCB] rounded-md px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute top-0 left-2 -translate-y-3/5 bg-[#F7F8F9] pl-2 pr-2 text-sm font-medium text-[#6C25FF] mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              required
              onChange={handleChange}
              value={form.phone}
              name="phone"
              type="text"
              placeholder="1234567890"
              className="w-full border-[2px] border-[#CBCBCB] rounded-md px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute top-0 left-2 -translate-y-3/5 bg-[#F7F8F9] pl-2 pr-2 text-sm font-medium text-[#6C25FF] mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              required
              onChange={handleChange}
              value={form.email}
              name="email"
              type="email"
              placeholder="marry@example.com"
              className="w-full border-[2px] border-[#CBCBCB] rounded-md px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="relative w-full">
            <label className=" absolute top-0 left-2 -translate-y-3/5 bg-[#F7F8F9] pl-2 pr-2 text-sm font-medium text-[#6C25FF] mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              required
              onChange={handleChange}
              value={form.password}
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full border-[2px] border-[#CBCBCB] rounded-md px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="relative w-full">
            <label className=" absolute top-0 left-2 -translate-y-3/5 bg-[#F7F8F9] pl-2 pr-2 text-sm font-medium text-[#6C25FF] mb-1">
              Company name
            </label>
            <input
              required
              onChange={handleChange}
              value={form.company}
              name="company"
              type="text"
              placeholder="My Company"
              className="w-full border-[2px] border-[#CBCBCB] rounded-md px-3 py-2 text-sm outline-none"
            />
          </div>
          <div className="-mt-4">
            <p className="text-sm font-medium text-[#1D2226] mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="accent-[#6C25FF]"
                  checked={form.agency === "yes"}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="accent-[#6C25FF]"
                  checked={form.agency === "no"}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </div>
          {/* Button at bottom */}
          <button
            type="submit"
            className="w-[335px] top-[640px] bg-[#6C25FF] text-white text-sm font-medium py-3 rounded-md mt-4 absolute"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

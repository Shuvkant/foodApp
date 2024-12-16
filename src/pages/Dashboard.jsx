import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="bg-red-200 h-screen w-screen flex flex-col">
        <div className=" w-screen bg-gray-300">
          <h2 className="text-center">
            Welcome to the Dashboard This is shuvkant
          </h2>
        </div>
        <div className="flex flex-row  h-screen">
          <div className="bg-red-100 flex flex-col">
            <div className="">
              Dashboard
            </div>
            <div>Sign Out</div>
            <div>Account section</div>
          </div>
          <div className="flex flex-col p-3">
            <div className="text-center ">A single component</div>
            <div>Second component</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

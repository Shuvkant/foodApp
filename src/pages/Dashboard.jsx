import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <h2 className="text-center bg-banner bg-cover bg-center py-4">
          Welcome to the Dashboard
        </h2>
      </div>
      <div className="flex flex-row h-screen">
        {/* Sidebar */}
        <div className="flex flex-col bg-gray-700 w-40 text-white text-center ">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="w-100">
              <Link
                to="/dashboard"
                className="nav-link text-white px-0 align-middle"
              >
                <i className="fs-4  ms-2"></i>
                <span className="ms-2 d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>

            <li className="w-100">
              <Link
                to="/pos"
                className="nav-link text-white px-0 align-middle"
              >
                <i className="fs-4   ms-2"></i>
                <span className="ms-2 d-none d-sm-inline">Pos</span>
              </Link>
            </li>

            <li className="w-100">
              <Link
                to="/coupons"
                className="nav-link text-white px-0 align-middle"
              >
                <i className="fs-4   ms-2"></i>
                <span className="ms-2 d-none d-sm-inline">Coupons</span>
              </Link>
            </li>

            <li className="w-100">
              <Link
                to="/"
                className="nav-link text-white px-0 align-middle"
              >
                <i className="fs-4   ms-2"></i>
                <span
                  className="ms-2 d-none d-sm-inline"
                  onClick={handleLogout}
                >
                  Signout
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Section */}
        <div className="bg-red-200 w-full flex items-center justify-center">
          <h3 className="text-center text-gray-700">Main Section</h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

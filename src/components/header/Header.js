import React, { useState } from "react";
import { FaClock, FaRegEnvelope, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../context/useCurrentUser";
import "./header.css";

export default function Header({onSetTabHandler}) {
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState(false);
  if (isLogout) {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("access_token");
    navigate("/");
  }
  return (
    <>
      <section
        className="Main_header fixed-top"
        style={{ paddingLeft: "200px", backgroundColor: "#bbe3e3" }}
      >
        <div
          className="top_bar_header d-flex justify-content-between align-items-center"
          style={{ padding: "18px 10px 18px 10px" }}
        >
          <div className="top_bar_left d-flex justify-content-between align-items-center">
            <div className="top_bar office_timings px-4">
              <FaRegEnvelope className="me-2" />
              contact@gmail.com
            </div>
            <div className="top_bar office_timings px-4">
              <FaClock className="me-2" />
              Office Timings: 9 AM EST to 11 PM EST
            </div>

            <div className="top_bar refer_earn"  onClick={() => onSetTabHandler("Referal")}>
              <b style={{ color: "red", cursor:'pointer' }}>Refer and Earn</b>
            </div>
          </div>
          <div className="top_bar user_account justify-content-between align-items-center">
            <span className="user_name px-4 ">
              <FaUser className="mx-2 " />
              Hi, {currentUser?.fullname || "Anonymous User"}
            </span>
            <button
              onClick={() => setIsLogout(true)}
              className="me-4 btn btn-dark rounded"
            >
              <FaSignOutAlt className="me-1" />
              Logout
            </button>
          </div>
        </div>
        <SubHeader />
      </section>
    </>
  );
}

function SubHeader() {
  return (
    <>
      <small className="d-block subHeader bg-black text-white px-4">
        Important Updates: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam maximus nulla con
      </small>
    </>
  );
}

import React from "react";
import "../Emp_Home.css";

function Header({ menuHandler, menuType }) {
  return (
    <>
      <header className="app-header navbar">
        <button
          appmobilesidebartoggler=""
          className="navbar-toggler d-lg-none"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand"></span>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item-head">
            <a
              className={
                menuType === "schedule"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              onClick={() => menuHandler("schedule")}
              href="#/"
            >
              Schedule
            </a>
          </li>

          <li className="nav-item-head">
            <a
              className={
                menuType === "documents"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              onClick={() => menuHandler("documents")}
              href="#/"
            >
              Documents
            </a>
          </li>

          <li className="nav-item-head">
            <a
              className={
                menuType === "taxPreparation"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              onClick={() => menuHandler("taxPreparation")}
              href="#/"
            >
              Preparation
            </a>
          </li>

          <li className="nav-item-head">
            <a
              className={
                menuType === "payment"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              onClick={() => menuHandler("payment")}
              href="#/"
            >
              Payment
            </a>
          </li>
          <li className="nav-item-head">
            <a
              className={
                menuType === "clientReview"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              onClick={() => menuHandler("clientReview")}
              href="#/"
            >
              Client Review
            </a>
          </li>
          <li className="nav-item-head">
            <a
              className={
                menuType === "eFiling"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              onClick={() => menuHandler("eFiling")}
              href="#/"
            >
              E-Filing
            </a>
          </li>

          <li className="nav-item-head">
            <a
              className={
                menuType === "registerClient"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              href="#/"
            >
              Register client
            </a>
          </li>

          <li className="nav-item-head">
            <a
              className={
                menuType === "registerEmployee"
                  ? "nav-link-head active"
                  : "nav-link-head"
              }
              href="#/"
            >
              Register employee
            </a>
          </li>

          <li
            className="nav-item dropdown"
            dropdown=""
            placement="bottom right"
          >
            <a
              aria-haspopup="true"
              className="nav-link"
              data-toggle="dropdown"
              dropdowntoggle=""
              href="#/"
              role="button"
              aria-expanded="false"
            >
              <img
                alt="serentax"
                className="img-avatar"
                src="assets/img/short cut_icon.png"
              />
            </a>
            <div
              aria-labelledby="simple-dropdown"
              className="dropdown-menu dropdown-menu-right"
              style={{
                left: "auto",
                right: "0px",
                top: "100%",
                transform: "translateY(0px)",
              }}
            >
              <a href="#/" className="dropdown-item">
                <i className="fa fa-lock"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;

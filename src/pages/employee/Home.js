import React, { useState } from "react";
import "./Emp_Home.css";
import { FaPlus } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import HomeLeftBar from "./includes/HomeLeftBar";
import { toCapatilize } from "../../utils/commonFunction";
import "bootstrap/dist/js/bootstrap.bundle";

function Home() {
  const [menuType, setmenuType] = useState("schedule");
  const [sidebarActive, setSidebarActive] = useState(false);

  const setmenuTypeHandler = (menuType) => {
    setmenuType(menuType);
  };

  const sideBarToggler = () => {
    setSidebarActive((prev) => {
      if (prev === true) return false;
      else return true;
    });
  };

  return (
    <>
      <div className="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
        <div className="app-dash">
          <Header menuHandler={setmenuTypeHandler} menuType={menuType} />
          <div className="app-body">
            <main className="main">
              <ol className="breadcrumb navBottomBar">
                <li className="breadcrumb-item">
                  <a href="#/home" className="text-dark">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#/home/client-review" className="text-dark">
                    {toCapatilize(menuType)}
                  </a>
                </li>
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item-head mx-2 pb-2 h3 text-dark">Hi,</li>
                </ul>
              </ol>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className={
                      sidebarActive
                        ? "col-2  sideBarClose"
                        : "col-2 sideBarOpen"
                    }
                    id="sidebar"
                  >
                    <div className="card sidebarCard">
                      <div className="card-header sidebarCardHeader text-capitalize d-flex justify-content-between align-items-center text-dark">
                        <AiOutlineDashboard
                          className={
                            sidebarActive
                              ? "dasboardIconActive sideBarDashClose"
                              : "dasboardIconActive sideBarDashOpen"
                          }
                        />
                        <span
                          className={
                            sidebarActive
                              ? "text-white sideBarHeadingClose"
                              : "text-white sideBarHeadingOpen"
                          }
                        >
                          {menuType}
                        </span>
                        <span
                          className={
                            sidebarActive
                              ? "Ham text-dark sideBarIconClose"
                              : "Ham text-dark sideBarIconOpen"
                          }
                          id="sidebarbtn"
                          onClick={() => sideBarToggler()}
                        >
                          <FaLocationArrow
                            className={
                              sidebarActive
                                ? "sidebarArrow sidebarArrowClose"
                                : "sidebarArrow sidebarArrowOpen"
                            }
                          />
                        </span>
                      </div>
                      {/* <input type="text" onChange={(event) => setEmail(event)} value={email}/> */}
                      <HomeLeftBar
                        menuType={menuType}
                        sidebarActive={sidebarActive}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      sidebarActive
                        ? "col-10 sideBarRightClose"
                        : "col-10 sideBarRightOpen"
                    }
                  >
                    <div className="row">
                      <div className="col-12">
                        <select
                          className="browser-default custom-select pull-right ng-untouched ng-pristine ng-valid"
                          style={{ textAlign: "center", float: "right" }}
                        >
                          <option value="undefined">Select the tax year</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                        </select>
                      </div>
                    </div>

                    <form noValidate="" className="">
                      <div className="row">
                        <div className="form-group col-3 text-center text-dark">
                          <label htmlFor="search-name">Name</label>
                          <input
                            className="form-control cyanInput"
                            id="search-name"
                            minLength="3"
                            name="name"
                            type="text"
                          />
                        </div>
                        <div className="form-group col-3 text-center text-dark">
                          <label htmlFor="search-email">Email</label>
                          <input
                            className="form-control cyanInput"
                            id="search-email"
                            name="searchEmail"
                            type="email"
                          />
                        </div>
                        <div className="form-group col-2 text-center text-dark">
                          <label htmlFor="search-phone">Phone</label>
                          <input
                            className="form-control cyanInput"
                            id="search-phone"
                            minLength="6"
                            name="phone"
                            type="text"
                          />
                        </div>
                        <div className="form-group col-2 text-center text-dark">
                          <label htmlFor="file">File</label>
                          <input
                            className="form-control cyanInput"
                            id="file"
                            name="file"
                            type="text"
                          />
                        </div>
                        <div className="col-2 form-group">
                          <label htmlFor="search">&nbsp;&nbsp;</label>
                          <button
                            className="btn btn-secondary form-control"
                            id="search"
                            type="submit"
                            disabled=""
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="card roundedCard">
                      <div className="card-header roundedCardHeader">
                        Clients
                        <button
                          className="btn btn-primary btn-sm"
                          placement="left"
                          popover="New Client"
                          triggers="mouseenter:mouseleave"
                          style={{ float: "right" }}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <div className="card-body">
                        <table className="table home-table">
                          <thead>
                            <tr className="tableCyanRow">
                              <th>S.no</th>
                              <th>Client Name</th>
                              <th>Email</th>
                              <th>Comments</th>
                              <th>Date and Time</th>
                              <th>Time Zone</th>
                              <th>File</th>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>

                        <div className="alert alert-secondary text-center">
                          Loading <i className="fa fa-spinner fa-spin"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

import {
  FaChartPie,
  FaChevronDown,
  FaCopy,
  FaHome,
  FaPuzzlePiece,
  FaRegPaperPlane,
  FaRegSun,
  FaWallet,
} from "react-icons/fa";

import "./nav.css";
export default function NavBar({ onSetTabHandler, activeTab }) {
  return (
    <>
      <div className="sidebar_wrapper">
        <nav className="sidebar">
          <div className="top_bar logo text-center">
            <img
              src="/images/logo.png"
              style={{ width: 200, objectFit: "cover", height: "34px" }}
              alt="serenetax"
            ></img>
          </div>
          <hr />
          <ul className="list-unstyled components">
            {/* Home nav item */}
            <li className="nav-item" onClick={() => onSetTabHandler("Home")}>
              <a
                href="#/"
                className={
                  activeTab === "Home"
                    ? "d-flex align-items-center nav-link active"
                    : "d-flex align-items-center nav-link "
                }
              >
                <FaHome className="me-2" size={14} /> Home
              </a>
            </li>
            {/* Basic Info nav item */}
            <li className="nav-item">
              <a
                href="#/"
                className="nav-link  collapsed d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#homeSubmenu"
              >
                <span className="d-flex align-items-baseline">
                  <FaPuzzlePiece className="me-2" size={14} />
                  Basic Info
                </span>
                <FaChevronDown />
              </a>
              <ul
                className="nav-item-list accordion-collapse collapse"
                id="homeSubmenu"
              >
                <li
                  className="nav-item"
                  onClick={() => onSetTabHandler("PersonalInfo")}
                >
                  <a
                    className={
                      activeTab === "PersonalInfo"
                        ? "d-flex align-items-center nav-link active"
                        : "d-flex align-items-center nav-link "
                    }
                    href="#/"
                  >
                    <FaPuzzlePiece className="me-2" size={14} />
                    Personal Info
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => onSetTabHandler("DependInfo")}
                >
                  <a
                    className={
                      activeTab === "DependInfo"
                        ? "d-flex align-items-center nav-link active"
                        : "d-flex align-items-center nav-link "
                    }
                    href="#/"
                  >
                    <FaPuzzlePiece className="me-2" size={14} />
                    Dependent Info
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => onSetTabHandler("BankDetails")}
                >
                  <a
                    className={
                      activeTab === "BankDetails"
                        ? "d-flex align-items-center nav-link active"
                        : "d-flex align-items-center nav-link "
                    }
                    href="#/"
                  >
                    <FaPuzzlePiece className="me-2" size={14} />
                    Bank Details
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => onSetTabHandler("Fbar")}
                >
                  <a
                    className={
                      activeTab === "Fbar"
                        ? "d-flex align-items-center nav-link active"
                        : "d-flex align-items-center nav-link "
                    }
                    href="#/"
                  >
                    <FaPuzzlePiece className="me-2" size={14} />
                    FBAR
                  </a>
                </li>
              </ul>
            </li>

            {/* Other information nav item */}
            <li className="nav-item">
              <a
                href="#/"
                className="nav-link  collapsed d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#otherInfo"
              >
                <span className="d-flex align-items-baseline">
                  <FaPuzzlePiece className="me-2" size={14} />
                  Other Information
                </span>
                <FaChevronDown />
              </a>
              <ul
                className="nav-item-list accordion-collapse collapse"
                id="otherInfo"
              >
                <li
                  className="nav-item"
                  onClick={() => onSetTabHandler("OtherIncome")}
                >
                  <a
                    className={
                      activeTab === "OtherIncome"
                        ? "d-flex align-items-center nav-link active"
                        : "d-flex align-items-center nav-link "
                    }
                    href="#/"
                  >
                    <FaPuzzlePiece className="me-2" size={14} />
                    Other Income
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => onSetTabHandler("Expenses")}
                >
                  <a
                    className={
                      activeTab === "Expenses"
                        ? "d-flex align-items-center nav-link active"
                        : "d-flex align-items-center nav-link "
                    }
                    href="#/"
                  >
                    <FaPuzzlePiece className="me-2" size={14} />
                    Expenses
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => onSetTabHandler("RentalIncome")}
                >
                  <a
                    className={
                      activeTab === "RentalIncome"
                        ? "d-flex align-items-center nav-link active"
                        : "d-flex align-items-center nav-link "
                    }
                    href="#/"
                  >
                    <FaPuzzlePiece className="me-2" size={14} />
                    Rental Income
                  </a>
                </li>
              </ul>
            </li>

            {/* Upload Documents */}

            <li
              className="nav-item"
              onClick={() => onSetTabHandler("uploadDocuments")}
            >
              <a
                href="#/"
                className={
                  activeTab === "uploadDocuments"
                    ? "d-flex align-items-center nav-link active"
                    : "d-flex align-items-center nav-link "
                }
              >
                <FaCopy className="me-2" size={14} /> Upload Documents
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => onSetTabHandler("TaxSummary")}
            >
              <a
                href="#/"
                className={
                  activeTab === "TaxSummary"
                    ? "d-flex align-items-center nav-link active"
                    : "d-flex align-items-center nav-link "
                }
              >
                <FaChartPie className="me-2" size={14} /> Tax Summary
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#/"
                className={
                  activeTab === "makePayment"
                    ? "d-flex align-items-center nav-link active"
                    : "d-flex align-items-center nav-link "
                }
              >
                <FaWallet className="me-2" size={14} /> Make Payment
              </a>
            </li>

            <li className="nav-item" onClick={() => onSetTabHandler("Referal")}>
              <a
                href="#/"
                className={
                  activeTab === "Referal"
                    ? "d-flex align-items-center nav-link active"
                    : "d-flex align-items-center nav-link "
                }
              >
                <FaRegPaperPlane className="me-2" size={14} /> Referrals
              </a>
            </li>

            <li className="nav-item" onClick={() => onSetTabHandler("Message")}>
              <a
                href="#/"
                className={
                  activeTab === "Message"
                    ? "d-flex align-items-center nav-link active"
                    : "d-flex align-items-center nav-link "
                }
              >
                <FaRegPaperPlane className="me-2" size={14} /> Messages
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => onSetTabHandler("Settings")}
            >
              <a
                href="#/"
                className={
                  activeTab === "Settings"
                    ? "d-flex align-items-center nav-link active"
                    : "d-flex align-items-center nav-link "
                }
              >
                <FaRegSun className="me-2" size={14} /> Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

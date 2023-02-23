import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaRegUser, FaLock, FaMobileAlt } from "react-icons/fa";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { errorToaster } from "../../components/toaster/Toaster";
import { loadingPromise } from "../../utils/commonFunction";

export default function Register() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [taxfileYear, setTaxfileYear] = useState([]);
  const [sourceType, setSourceType] = useState("");
  // checking if the user is already logined then sending back to dashboard
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
    // Adding the taxFile year of [previousYear,currentYear,nextYear]
    const currentYear = new Date().getFullYear();
    setTaxfileYear([currentYear - 1, currentYear, currentYear + 1]);
  }, []);

  const [loading, setLoading] = useState(false);
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    taxYear: "",
    phone: "",
    alternate_phone: "",
    source: "",
    advertisements: "",
    others: "",
    timezone: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "source") setSourceType(value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = userRegistration;
    if (password !== confirmPassword) {
      errorToaster("Password do not match");
    } else {
      setLoading(true); // if the submit is in progress
      const registerLoading = toast.loading("Registration in progress");
      const userRecord = {
        name: userRegistration.name,
        email: userRegistration.email,
        password: userRegistration.password,
        year_of_tax_filing: userRegistration.taxYear,
        phone: userRegistration.phone,
        alternate_phone: userRegistration.alternate_phone,
        do_you_know: userRegistration.source,
        advertisements: userRegistration.advertisements,
        others: userRegistration.others,
        preferred_timezone: userRegistration.timezone,
      };
      const data = await API.register(userRecord);
      if (data.statusCode === 200) {
        toast.update(registerLoading, {
          render: "Registration successful",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
        await loadingPromise(1500);
        navigate("/");
      } else {
        toast.update(registerLoading, {
          render: data.message,
          type: "error",
          isLoading: false,
          autoClose: true,
        });
        setLoading(false); // if the submit is completed
      }
    }
  };
  return (
    <>
      {authenticated && <Navigate replace to="/dashboard" />}
      <main className="main d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center w-50">
          <div
            className="register__taxImage text-center"
            style={{ width: "50%", marginBottom: "40px" }}
          >
            <img src="./images/edited.png" width="350" alt="taxLogo" />
          </div>
          <div className="custom-control custom-control-inline">
            <img
              alt="serene_tick"
              className="img-fluid"
              src="./images/signup_bg.png"
              width={350}
            />
          </div>
        </div>

        <div className="row">
          <div className="card mx-4 shadow">
            <div className="card-body p-4">
              <div className="center">
                <img
                  alt="Serene Tax Logo"
                  className="img-fluid"
                  src="./images/logo.png"
                  width={350}
                />
              </div>
              <form noValidate="" className="" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <FaRegUser />
                  </span>
                  <input
                    autoComplete="name"
                    className="form-control "
                    name="name"
                    placeholder="Name"
                    required={true}
                    type="text"
                    onChange={handleInputs}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">@</span>
                  <input
                    autoComplete="email"
                    className="form-control "
                    email=""
                    name="email"
                    placeholder="Email"
                    required={true}
                    type="email"
                    onChange={handleInputs}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    autoComplete="new-password"
                    className="form-control "
                    minLength="8"
                    name="password"
                    placeholder="Password"
                    required={true}
                    type="password"
                    onChange={handleInputs}
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    appconfirminput="password"
                    autoComplete="new-password"
                    className="form-control "
                    name="confirmPassword"
                    placeholder="Repeat password"
                    required={true}
                    type="password"
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="taxYear">Year of tax filing</label>
                  <select
                    className="form-control "
                    id="taxYear"
                    name="taxYear"
                    required={true}
                    onChange={handleInputs}
                  >
                    <option value="">Please Select--</option>
                    {taxfileYear.map((year) => (
                      <option value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <FaMobileAlt />
                  </span>
                  <input
                    autoComplete="phone"
                    className="form-control ng-untouched ng-pristine ng-valid"
                    name="phone"
                    placeholder="Phone"
                    type="tel"
                    onChange={handleInputs}
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <FaMobileAlt />
                  </span>
                  <input
                    autoComplete="phone"
                    className="form-control ng-untouched ng-pristine ng-valid"
                    name="alternate_phone"
                    placeholder="Alternate Phone"
                    type="tel"
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="source">
                    How do you know about Serene Tax Filer
                  </label>
                  <select
                    className="form-control ng-untouched ng-pristine ng-valid"
                    id="source"
                    name="source"
                    onChange={handleInputs}
                  >
                    <option value="">Please Select--</option>
                    <option value="1">Referral</option>
                    <option value="2">Advertisements</option>
                    <option value="3">Others</option>
                  </select>
                </div>
                {sourceType === "1" && (
                  <div className="input-group mb-4">
                    <span className="input-group-text">@</span>
                    <input
                      className="form-control ng-untouched ng-pristine ng-valid"
                      name="referral_user"
                      placeholder="Enter Email"
                      type="email"
                      required={true}
                      onChange={handleInputs}
                    />
                  </div>
                )}
                {sourceType === "2" && (
                  <div className="form-group mb-4">
                    <select
                      className="form-control ng-untouched ng-pristine ng-valid"
                      id="advertisements"
                      name="advertisements"
                      onChange={handleInputs}
                    >
                      <option value="">
                        Please select type of advertisements
                      </option>
                      <option value="Internet">Internet</option>
                      <option value="Magazine">Magazine</option>
                    </select>
                  </div>
                )}
                {sourceType === "3" && (
                  <div className="input-group mb-4">
                    <input
                      className="form-control ng-untouched ng-pristine ng-valid"
                      name="others"
                      placeholder="Enter something"
                      type="text"
                      required={true}
                      onChange={handleInputs}
                    />
                  </div>
                )}
                <div className="form-group mb-4">
                  <label htmlFor="timezone">Prefered Time Zone</label>
                  <select
                    className="form-control ng-untouched ng-pristine ng-valid"
                    id="timezone"
                    name="timezone"
                    onChange={handleInputs}
                  >
                    <option value="">Select TimeZone</option>
                    <option value="CST">Central Standard Time(CST)</option>
                    <option value="EST">Eastern Standard Time(EST)</option>
                    <option value="CST">Mountain Standard Time(MST)</option>
                    <option value="CST">Pacific Standard Time(PST)</option>
                    <option value="CST">Indian Standard Time(IST)</option>
                  </select>
                </div>
                <div className="text-center">
                  <button
                    className={`btn btn-primary ${loading ? "disabled" : ""}`}
                    type="submit"
                  >
                    Create account
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="row">
                <div className="col-12 text-center">
                  Have an account?
                  <Link
                    className={`mx-2 btn btn-secondary  ${
                      loading ? "disabled" : ""
                    }`}
                    to={"/"}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

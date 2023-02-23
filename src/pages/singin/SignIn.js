import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { errorToaster } from "../../components/toaster/Toaster";
import { API } from "../../services/api";
import "../singin/signin.css";
import "react-toastify/dist/ReactToastify.css";
import { useCurrentUser } from "../../context/useCurrentUser";

const SigIn = () => {
  const navigate = useNavigate();
  const { setCurrentUserData } = useCurrentUser();
  const [authenticated, setAuthenticated] = useState(false);
  // checking if the user is already logined then sending back to dashboard
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);

  // user Login manage
  const [loading, setLoading] = useState(false);
  const [userCredential, setUserCredential] = useState({
    username: "",
    password: "",
    login_from: "manually",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCredential({ ...userCredential, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = await API.login(userCredential);
    setLoading(false);
    if (userData.statusCode === 200) {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("access_token", userData.access_token);
      setCurrentUserData(userData.data);
      setAuthenticated(true);
      navigate("/dashboard");
    } else {
      errorToaster(userData.message);
    }
  };
  return (
    <>
      {authenticated && <Navigate replace to="/dashboard" />}
      <section className="signIn_wrapper">
        <div className="btn-top">
          <Link to={"/signUp"} className="btn-login text-decoration-none">
            Sign Up
          </Link>
        </div>

        <div className="signup">
          <div className="signup-container">
            <div className="tab">
              <img src="./images/logo.png" alt="" />
            </div>
            <h1 className="signup-heading">Sign In</h1>
            <h5 className="signup-subheading">Login to file your returns</h5>
            <form
              onSubmit={handleSubmit}
              className="signup-form"
              autoComplete="off"
            >
              {/* email field started */}
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Email
                </label>
                <input
                  type="username"
                  id="username"
                  className="form-input"
                  required={true}
                  name="username"
                  onChange={handleInputs}
                />
              </div>
              {/* password field started */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  required={true}
                  name="password"
                  onChange={handleInputs}
                />
              </div>
              {/* create account button started */}
              <div className="btn-area">
                <button
                  type="submit"
                  className={`btn btn--gradient ${loading ? "disabled" : ""}`}
                >
                  Sign In
                </button>
              </div>
              <br />
              {/* google signup field started */}
              <div className="btn-area">
                <button
                  type="submit"
                  className={`btn1 ${loading ? "disabled" : ""}`}
                >
                  <img
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4="
                  />
                  &nbsp;&nbsp; Sign Up with Google
                </button>
              </div>
            </form>
          </div>
          <div className="rig-img">
            <img src="./images/im1.png" alt="" className="signup-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SigIn;

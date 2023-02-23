import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/singin/SignIn";
import Register from "./pages/register/Register";
import Main from "./pages/main/Main";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/employee/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CurrentUserProvider } from "./context/useCurrentUser";
import { CurrentFileYearProvider } from "./context/useCurrentFileYear";

const App = () => {
  return (
    <>
      <ToastContainer />
      <CurrentUserProvider>
        <CurrentFileYearProvider>
          <Routes>
            <Route exact path="/SignUp" element={<Register />} />
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/dashboard" element={<Main />} />
          </Routes>
        </CurrentFileYearProvider>
      </CurrentUserProvider>
      <Routes>
        <Route exact path="/employee/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

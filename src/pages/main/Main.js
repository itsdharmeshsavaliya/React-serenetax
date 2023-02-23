import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import Footer from "../../components/footer/Footer";
import DependantInfo from "./DependantInfo";
import Home from "./Home";
import PersonalInfo from "./PersonalInfo";
import BankDetails from "./BankDetails";
import Fbar from "./Fbar";
import OtherIncome from "./OtherIncome";
import Expenses from "./Expenses";
import RentalIncome from "./RentalIncome";
import "./Main.css";
import UploadDocument from "./UploadDocument";
import TaxSummary from "./TaxSummary";
import Referal from "./Referal";
import Messages from "./Messages";
import Settings from "./Settings";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../../context/useCurrentUser";

export default function Main() {
  const { fetchCurrentUser } = useCurrentUser();
  const isAuthenticated = localStorage.getItem("authenticated") || false;
  const [tab, setTab] = useState("Home");
  const setTabHandler = (tab) => {
    setTab(tab);
  };
  useEffect(() => {
    fetchCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!isAuthenticated) {
    return (
      <Navigate replace to="/" state={{ loginError: "Kindly login firsts" }} />
    );
  } else {
    return (
      <section>
        <Header onSetTabHandler={setTabHandler}/>
        <div className="d-flex">
          <NavBar onSetTabHandler={setTabHandler} activeTab={tab} />
          {tab === "Home" && <Home onSetTabHandler={setTabHandler} />}
          {tab === "PersonalInfo" && <PersonalInfo />}
          {tab === "DependInfo" && <DependantInfo />}
          {tab === "BankDetails" && <BankDetails />}
          {tab === "Fbar" && <Fbar />}
          {tab === "OtherIncome" && <OtherIncome />}
          {tab === "Expenses" && <Expenses />}
          {tab === "RentalIncome" && <RentalIncome />}
          {tab === "uploadDocuments" && <UploadDocument />}
          {tab === "TaxSummary" && <TaxSummary />}
          {tab === "Referal" && <Referal />}
          {tab === "Message" && <Messages />}
          {tab === "Settings" && <Settings />}
        </div>
        <Footer />
      </section>
    );
  }
}

import React, { useEffect, useState } from "react";
import { useCurrentFileYear } from "../../context/useCurrentFileYear";
import { useCurrentUser } from "../../context/useCurrentUser";

function Home({ onSetTabHandler }) {
  const [taxfileYear, setTaxfileYear] = useState([]);
  const { currentUser } = useCurrentUser();
  const { currentFileYear, setCurrentYear } = useCurrentFileYear();
  useEffect(() => {
    // Adding the taxFile year of [previousYear,currentYear,nextYear]
    const currentYear = new Date().getFullYear();
    setTaxfileYear([currentYear - 1, currentYear, currentYear + 1]);
  }, []);

  const handleTaxFileYear = (e) => {
    setCurrentYear(e.target.value);
  };
  return (
    <>
      <div className="container-fluid main_body_container">
        <div className="home_main">
          <div className="home_bg">
            <div className="card-body">
              <div className="py-1" id="home-div">
                <div className="row justify-content-center">
                  <div className="col-md-9 text-center">
                    <div className="h1 font-weight-bold">
                      Hello! Welcome to Serene Tax!
                    </div>
                    <h3>
                      Your unique file number is: {currentUser?.filing_id || -1}
                    </h3>
                    <div className="d-flex justify-content-center">
                      <h5>Please select the tax year to continue &nbsp;</h5>
                      <select
                        value={currentFileYear}
                        name="yearSelector"
                        className="form-group"
                        onChange={handleTaxFileYear}
                        required={true}
                      >
                        {taxfileYear.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-text text-center">
          <h3 className="font-weight-bold">
            3 Easy Steps to process your tax return
          </h3>
        </div>
        {/* <div className="row justify-content-center">
          <img
            src="./images/home_png.png"
            alt="steps process"
            style={{ width: "50%" }}
          />
        </div> */}
        <div
          className="container d-flex justify-content-center"
          style={{ maxWidth: "630px" }}
        >
          <img
            src="./images/1.png"
            alt="steps process"
            style={{ width: "50%", marginRight: "-102px" }}
            onClick={() => onSetTabHandler("PersonalInfo")}
          />
          <img
            src="./images/2.png"
            alt="steps process"
            style={{ width: "50%" }}
            onClick={() => onSetTabHandler("uploadDocuments")}
          />
          <img
            src="./images/3.png"
            alt="steps process"
            style={{ width: "50%", marginTop: "-20px", marginLeft: "-110px" }}
            onClick={() => onSetTabHandler("TaxSummary")}
          />
        </div>
        <div className="home-text text-center" style={{ padding: "30px" }}>
          <h5 className="font-weight-bold">
            Our misson is to deliver premium quality of work for every client
            <br />
            Our paperwork is accurate and always up to date
          </h5>
        </div>
      </div>
    </>
  );
}

export default Home;

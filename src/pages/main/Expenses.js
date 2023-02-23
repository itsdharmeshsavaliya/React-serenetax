import React, { useState } from "react";
import "./toggle.css";

function Expenses() {
  const [toggleStatus, setToggleStatus] = useState(false);

  const handleToggleStatus = (event) => {
    setToggleStatus(event.target.checked);
  };

  return (
    <>
      <div className="container-fluid main_body_container">
        <div className="card container-fluid">
          <div className="card-body">
            <h2>Expenses</h2>
            <div className="row">
              <div className="col-9 my-2">
                Any amounts paid for healthcare and to doctors, dentists,
                hospitals
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" onChange={handleToggleStatus} />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              {toggleStatus && (
                <div className="my-2 col-12">
                  <textarea
                    className="form-control"
                    name="info-comment"
                    placeholder="Please explain"
                    rows="2"
                    type="text"
                    id="comment-0"
                  ></textarea>
                </div>
              )}

              <div className="col-9 my-2">
                Did you make any charitable contributions? If yes, please give
                details.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Do you have a Home Mortgage Interest in US or India? If yes,
                please give details.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Any casualty or theft losses? If yes, please give details
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Have you paid alimony in 2020? If yes please specify the amount
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Did you itemize your returns last year? if yes please provide
                state refund
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Did you pay any Sales and Excise taxes on vehicle bought in
                2020. If yes please upload bills
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                If you are resident of MA State, NJ State, CA State IN State, WI
                State? Provide Per month rent you are paying.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                If you are resident of MA State? Are you and your family covered
                with MA health insurance? If yes, mention the no. of months
                covered.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                If you are resident of OH & PA for 2020? If yes please provide
                your Home and Work address
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <h2>Contributions</h2>

              <div className="col-9 my-2">
                Do you make any additional contributions to H.S.A/ Apart from
                you we?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Do you make any additional contributions to I.R.A/401k plan
                Apart from you we?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Do you have student loan? If yes, please upload document 1098E
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Did you pay any tuition fee for self, spouse or dependents? If
                yes, please upload document 1098T.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Is your health insurance covered from employer or market
                place.?.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Form 1095-A if you enrolled in an insurance plan through the
                Marketplace
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Do you make any additional contributions to I.R.A/401k plan
                Apart from you we?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Did you purchase any energy saving product in USA? If yes please
                specify it.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="col-9 my-2">
                Have you purchased any Hybrid motor Vehicle in the TY 2020?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 col-12" hidden>
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>

              <div className="form-check form-check-inline mx-3">
                <br />
                <br />
                <input
                  className="form-check-input ng-untouched ng-pristine ng-valid"
                  id="basicInfoDeclaration"
                  name="basicInfoDeclaration"
                  type="checkbox"
                  value="true"
                />
                <label
                  className="form-check-label"
                  htmlFor="basicInfoDeclaration"
                >
                  I Declare that the information in this application is true and
                  correct
                </label>
              </div>
            </div>

            <div className="text-center m-2">
              <button className="btn btn-primary" disabled="">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;

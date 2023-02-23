import React, { useState } from "react";
import { useCurrentUser } from "../../context/useCurrentUser";
import { getOtherIncomeSchema } from "../../utils/schema";
import "./toggle.css";

function OtherIncome() {
  const { currentFileYear } = useCurrentUser()
  const [otherIncome, setOtherIncome] = useState(getOtherIncomeSchema(currentFileYear))

  const handleInputs = (e) => {
    const name = e.target.name;
    let { checked } = e.target;
    setOtherIncome(prevIncome => {
      const oldData = Object.assign(prevIncome);
      const isChecked = checked === true ? 1 : 0;
      const newIndex = oldData.otherIncome.findIndex(item => item.id === name)
      oldData.otherIncome[newIndex].expanded = isChecked
      return {...oldData}
    });
  };

  return (
    <>
      <div className="container-fluid main_body_container">
        <div className="card container-fluid">
          <div className="card-body">
            <div className="row">
              <div className="col-9 my-2">
                Have you earned any interest & dividend income for 2020? If yes
                please upload 1099-INT & DIV
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <label className="switch">
                    <input type="checkbox" name="interest_dividend" onChange={handleInputs} />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              { shouldShowTextArea("interest_dividend") === 1 && (<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Did you receive any business income or loss for the year 2020?
                If yes please upload 1099-MISC
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="business_income" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("business_income") === 1 && (<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="business_income"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Have you sold any Stocks in 2020 if yes please provide 1099-B
                document?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="sold_stocks" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("sold_stocks") === 1 && (<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                If you sold any ESPP please provide us form 3922?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="sold_espp" onChange ={handleInputs} />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("sold_espp") === 1 && (<div className="my-2 col-12" >
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Do you have any rental Income & incurred any expenses related to
                that rental property in India or USA?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="rental_income" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("rental_income") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Have you earned any interest income in US or abroad (India)
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="earned_interest" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("earned_interest") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Have you with draw money from HSA? If yes please upload form
                1099-SA.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="draw_money_hsa" onChange ={handleInputs} />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("draw_money_hsa") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Have you with drawn money from IRA 401k? If yes please enter the
                amount and form 1099-R
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="draw_money_ira" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("draw_money_ira") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Have you received any refund from states in Tax Year 2020 for
                the last year (only if return was itemized)?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="received_refund" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("received_refund") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Have you received any unemployment compensation 1099G.?
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="received_compensation" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("received_compensation") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Did you get any income or losses from royalties, partnership,
                s-corporation & trusts etc. if yes please upload schedule k-1
                (form 1065 or form 1120s).
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="income_or_losses" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("income_or_losses") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

              <div className="col-9 my-2">
                Have you received any third-party payment? If yes please provide
                form 1099-K.
              </div>
              <div className="col-3 my-2">
                <div
                  className="form-check d-flex justify-content-center"
                  style={{ marginTop: "-13px" }}
                >
                  <div>
                    <label className="switch">
                      <input type="checkbox" name ="received_third_party_payment" onChange ={handleInputs}/>
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              { shouldShowTextArea("received_third_party_payment") === 1 &&(<div className="my-2 col-12">
                <textarea
                  className="form-control"
                  name="info-comment"
                  placeholder="Please explain"
                  rows="2"
                  type="text"
                  id="comment-0"
                ></textarea>
              </div>)}

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

  function shouldShowTextArea(id) {
    const item = otherIncome.otherIncome.find(item => item.id === id)
    return item?.expanded
  }
}

export default OtherIncome;

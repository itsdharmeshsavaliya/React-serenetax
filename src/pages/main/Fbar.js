import React, { useEffect, useState } from "react";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { API } from "../../services/api";
import { getFbarSchema } from "../../utils/schema";

export default function Fbar() {
  const [bankDetails, setBankDetails] = useState(getFbarSchema());

  const handleFbarInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await API.saveFbarDetails(bankDetails);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };

    useEffect(() => {
    API.getFbar().then(res => {
       const fbarInfo  = res?.data?.fbarInfo
      if(Object.keys(fbarInfo).length > 0) {
        setBankDetails({...bankDetails, ...fbarInfo});
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])




  return (
    <div className="container-fluid main_body_container">
      <div className="col-md-12">
        <h4 style={{ paddingTop: "20px" }}>
          <b>Foreign Bank Account Reporting (FBAR) – 2020</b>
        </h4>
        <p>
          A United States person, including a citizen, resident, corporation,
          partnership, limited liability company, trust and estate, must file
          FBAR <br />
          If the person transferred or maintained the aggregate value of those
          foreign financial accounts exceeded $10,000 at any time during the
          calendar year need to file
        </p>
      </div>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#F5F5F5" }}>
        <div className="row mx-1">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "65%" }}>
                  <b>Foreign Financial account</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Ownership</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="ownership"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.ownership}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Name of Bank or Financial Institution</b>
                </td>
                <td>
                  <input
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.bank_financial}
                    type="text"
                    className="form-control"
                    name="bank_financial"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Street Address</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="street_address"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.street_address}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>city</b>
                </td>
                <td>
                  <input
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.city}
                    type="text"
                    className="form-control"
                    name="city"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>State</b>
                </td>
                <td>
                  <input
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.state}
                    type="text"
                    className="form-control"
                    name="state"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Postal Code</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="postal_code"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.postal_code}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Account Number</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="account_number"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.account_number}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Type Of Account</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="type_of_account"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.type_of_account}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>If others, please specify</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="if_others"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.if_others}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    Foreign currency in which acct is maintained (INR, EUR, GBP,
                    etc.)
                  </b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="foreign_currency"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.foreign_currency}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Income earned in the account during 2020</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="income_earned"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.income_earned}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    Total income earned in the account during 2020 (If line 7
                    'YES' please provide income details)
                  </b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="total_income_earned"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.total_income_earned}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    Maximum Value of Account during 2020 in Foreign currency
                  </b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="maximum_value_of_account"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.maximum_value_of_account}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Value of Account as on 31-Dec-2020 in Foreign currency</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="value_of_account"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.value_of_account}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Name of Joint Owner (if not spouse)</b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="name_of_joint_owner"
                    onChange={handleFbarInputs}
                    required={true}
                    value={bankDetails.name_of_joint_owner}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-inline-flex align-items-center">
          <input
            type="checkbox"
            value="true"
            className="form-check-input"
            required={true}
          />
          <label style={{ marginRight: "10px" }}>
            I declare that the Bank Details furnish herein are true & correct.
          </label>
        </div>
        <div className="text-center m-2">
          <button className={`btn btn-primary ${loading ? "disabled" : ""}`}>
            Save
          </button>
          {/* <button className="btn btn-warning">Reset</button> */}
        </div>
      </form>
    </div>
  );
}

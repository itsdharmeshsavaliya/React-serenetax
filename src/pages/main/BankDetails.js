import React, { useEffect, useState } from "react";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { API } from "../../services/api";
import { getBankDetailSchema } from "../../utils/schema";

function BankDetails() {
  const [bankDetails, setBankDetails] = useState(getBankDetailSchema());

  const handleBankInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await API.saveBankDetails(bankDetails);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };

    useEffect(() => {
    API.getBankDetails().then(res => {
      const bankInfo  = res?.data?.bankInfo
      if(Object.keys(bankInfo).length > 0) {
        setBankDetails({...bankDetails, ...bankInfo});
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="container-fluid main_body_container">
      <h4 style={{ padding: "20px 0 20px 0" }}>
        <b>Bank Information for Direct Deposit</b>
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="form-group col-6 mb-3">
                  <label>
                    <b> Name of the account holder </b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of the account"
                    name="account_holder_name"
                    onChange={handleBankInputs}
                    required={true}
                    value={bankDetails.account_holder_name}
                  />
                </div>
                <div className="form-group col-6 mb-3">
                  <label>
                    <b> Name of the Bank </b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of the bank"
                    name="bank_name"
                    required={true}
                    onChange={handleBankInputs}
                    value={bankDetails.bank_name}
                  />
                </div>
                <div className="form-group col-6 mb-3">
                  <label>
                    <b> Us Bank Routing Number </b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="US Bank Routing Number"
                    name="us_bank_routing_number"
                    maxLength="9"
                    required={true}
                    onChange={handleBankInputs}
                    value={bankDetails.us_bank_routing_number}
                  />
                </div>
                <div className="form-group col-6 mb-3">
                  <label>
                    <b> Us Bank Account Number </b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Us Bank Account Number"
                    name="us_bank_account_number"
                    maxLength="13"
                    required={true}
                    onChange={handleBankInputs}
                    value={bankDetails.us_bank_account_number}
                  />
                </div>
                <div className="form-group col-6 mb-3">
                  <label>
                    <b> Type of Account </b>
                  </label>
                  <select
                    required={true}
                    onChange={handleBankInputs}
                    value={bankDetails.account_type_id}
                    className="form-control"
                    name="account_type_id"
                  >
                    <option value="">Type Of account</option>
                    <option value="1">Checking Account</option>
                    <option value="2">Saving Account</option>
                    <option value="3">Others</option>
                  </select>
                </div>
                <div className="d-inline-flex align-items-center">
                  <input
                    type="checkbox"
                    value="true"
                    name="bankInfoDeclaration"
                    className="form-check-input"
                  />
                  <label style={{ marginRight: "10px" }}>
                    I declare that the Bank Details furnish herein are true &
                    correct.
                  </label>
                </div>
                <div className="text-center m-2">
                  <button
                    className={`btn btn-primary ${loading ? "disabled" : ""}`}
                  >
                    Save
                  </button>
                  {/* <button className={`btn btn-warning `}>Reset</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BankDetails;

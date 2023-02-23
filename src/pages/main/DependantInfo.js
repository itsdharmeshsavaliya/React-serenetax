import React, { useEffect, useState } from "react";
import ResidentialTable from "../../components/table/ResidentialTable";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { useCurrentFileYear } from "../../context/useCurrentFileYear";
import { API } from "../../services/api";
import { encodeQueryData, handleSSN } from "../../utils/commonFunction";
import {
  getDependentSchema,
  getUserResidentialSchema,
} from "../../utils/schema";
function DependantInfo() {
  const { currentFileYear } = useCurrentFileYear();
  const [dependentInfo, setDependentInfo] = useState(getDependentSchema());

  const handleDependentInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "ssn_itin") value = handleSSN(e);
    setDependentInfo({ ...dependentInfo, [name]: value });
  };

  // Add user residential
  const [userResidential, setUserResidential] = useState(
    getUserResidentialSchema(currentFileYear)
  );

  const addResidentialTableRow = (year) => {
    setUserResidential((prevUserResidential) => {
      const newData = {};
      Object.assign(newData, prevUserResidential);
      const newDataCollection = [
        ...prevUserResidential.data,
        {
          year,
          state_of_residence: "",
          from_date: "",
          to_date: "",
        },
      ];
      newData.data = newDataCollection;
      return newData;
    });
  };

  const deleteResidentialTableRow = (index) => {
    setUserResidential((prevUserResidential) => {
      const newData = {};
      Object.assign(newData, prevUserResidential);
      newData.data.splice(index, 1);
      return newData;
    });
  };
  // handle change of resendtial
  const handleResidentialChange = (name, value, index) => {
    setUserResidential((prevUserResidential) => {
      const newData = {};
      Object.assign(newData, prevUserResidential);
      newData.data[index][name] = value;
      return newData;
    });
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dependentInfo.user_residential_address = userResidential;
    dependentInfo.fullname = dependentInfo.firstName + ' ' + dependentInfo.middleName + ' ' + dependentInfo.lastName;
    const result = await API.saveDependentInfo(dependentInfo);
    setLoading(false);
    if (result.statusCode === 200) {
      setDependentInfo(getDependentSchema);
      setUserResidential(getUserResidentialSchema(currentFileYear));
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };

  const addMoreDependentInfo = () => {
    setUserResidential((prev) => getUserResidentialSchema(currentFileYear));
  };


  useEffect(() => {
    API.getDependentInfo(encodeQueryData({year:currentFileYear})).then(res => {
      const dInfo = res?.data?.dependentInfo
      if (Object.keys(dInfo).length > 0) {
        // const fullNameSplit = dInfo.fullname.split(' ');
        // setDependentInfo({ ...dependentInfo, fname: fullNameSplit[0], mname: fullNameSplit[1], lname: fullNameSplit[2], ...dInfo });
        // if (dInfo?.userResidentialAddressInfo?.data && dInfo.userResidentialAddressInfo.data.length > 0) {
        //   setUserResidential({ ...dInfo.d });
        // }
      }
      
    })
  },[currentFileYear])

  return (
    <>
      <div className="container-fluid main_body_container">
        <form onSubmit={handleSubmit}>
          <div className="row my-3">
            <div className="my-2 d-flex">
              <h4 className="col-11">Dependent Info</h4>
              <span
                className="col-1 btn btn-success"
                onClick={addMoreDependentInfo}
              >
                + Add more
              </span>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="col-12">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        <b>Name</b>
                      </label>
                      <div className="col-sm-8">
                        <input
                          id="name"
                          type="text"
                          className="form-control mb-3"
                          placeholder="First name"
                          name="fname"
                          onChange={handleDependentInputs}
                          value={dependentInfo.fname}
                          required={true}
                        />
                        <div className="alert alert-danger my-2" hidden>
                          First Name is required!
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="name" className="col-sm-4"></label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Last name"
                          name="lname"
                          value={dependentInfo.lname}
                          required={true}
                          onChange={handleDependentInputs}
                        />
                        <div className="alert alert-danger my-2" hidden>
                          Last Name is required!
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-4"></div>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control mb-3"
                          onChange={handleDependentInputs}
                          value={dependentInfo.mname}
                          name="mname"
                          placeholder="Middle name (s)"
                        />
                        <div className="alert alert-danger my-2" hidden>
                          Middle Name is required!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        <b>Date of birth</b>
                      </label>
                      <div className="col-sm-8">
                        <input
                          onChange={handleDependentInputs}
                          name="dob"
                          type="date"
                          className="form-control"
                          value={dependentInfo.dob}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3 mb-3">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        <b>Relationships</b>
                      </label>
                      <div className="col-sm-8">
                        <select
                          onChange={handleDependentInputs}
                          name="relationship_id"
                          className="form-control"
                          value={dependentInfo.relationship_id}
                          required={true}
                        >
                          <option value="">Please Select</option>
                          <option value="1">Daughter</option>
                          <option value="2">Son</option>
                          <option value="3">Father</option>
                          <option value="4">Mother</option>
                          <option value="5">Father-in-Law</option>
                          <option value="6">Mother-in-law</option>
                          <option value="7">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <dic className="card-body">
                  <div className="col-12 mb-3">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        <b>IRS Status</b>
                      </label>
                      <div className="col-sm-8">
                        <select
                          name="irs_status_id"
                          id="spouse_ssn_ssn"
                          className="form-control"
                          required={true}
                          value={dependentInfo.irs_status_id}
                          onChange={handleDependentInputs}
                        >
                          <option value="">Select</option>
                          <option value="1">SSN</option>
                          <option value="2">ITIN</option>
                          <option value="3">Applying ITIN</option>
                          <option value="4">Renewing ITIN</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {dependentInfo.irs_status_id && (
                    <div className="col-12">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label">
                          SSN/ITIN
                        </label>
                        <div className="col-sm-8">
                          <div className="my-2" id="spouse_unique_no">
                            <input
                              className="form-control ng-untouched ng-pristine ng-valid"
                              id="ssn_itin"
                              maxLength="11"
                              name="ssn_itin"
                              placeholder="Eg : 888-88-8888"
                              type="text"
                              value={dependentInfo.ssn_itin}
                              onChange={handleDependentInputs}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="col-12 mb-3">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        <b>Dependent Visa Type</b>
                      </label>
                      <div className="col-sm-8">
                        <select
                          name="visa_type_id"
                          onChange={handleDependentInputs}
                          value={dependentInfo.visa_type_id}
                          required={true}
                          className="form-control"
                        >
                          <option value="">Please Select</option>
                          <option value="1">F1</option>
                          <option value="2">F2</option>
                          <option value="3">H1</option>
                          <option value="4">H4</option>
                          <option value="5">L1</option>
                          <option value="6">L2</option>
                          <option value="7">B1</option>
                          <option value="8">B2</option>
                          <option value="9">J1</option>
                          <option value="10">J4</option>
                          <option value="11">U.S Citizen</option>
                          <option value="12">Green Card</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">
                        <b>Days stayed in the US (during the tax year)</b>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          min={1}
                          onChange={handleDependentInputs}
                          className="form-control"
                          name="days_stayed"
                          value={dependentInfo.days_stayed}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                </dic>
              </div>
            </div>
          </div>

          <div className="col-12 my-3">
            <h4>Residential Address(es) during tax year</h4>
            <div className="card">
              <div className="card-body p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Tax year</th>
                      <th>State of</th>
                      <th>From</th>
                      <th>To</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <ResidentialTable
                      rowsData={userResidential}
                      deleteResidentialTableRow={deleteResidentialTableRow}
                      addResidentialTableRow={addResidentialTableRow}
                      handleResidentialChange={handleResidentialChange}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h4 className="col-12">Day Care Details</h4>
          <p className="col-12">
            Fees paid to a licensed day care center or family day care for care
            of an infant or pre-schooler
          </p>
          <div className="card mb-3">
            <div className="card-body">
              <div className="col-6 mb-3">
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">
                    <b> Institution Name </b>
                  </label>
                  <div className="col-sm-8">
                    <input
                      onChange={handleDependentInputs}
                      type="text"
                      value={dependentInfo.institution_name}
                      required={true}
                      className="form-control"
                      name="institution_name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">
                    <b>Institution Tax ID</b>
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      value={dependentInfo.institution_tax_id}
                      required={true}
                      onChange={handleDependentInputs}
                      className="form-control"
                      name="institution_tax_id"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 row">
                <div className="col-sm-8 pb-2">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleDependentInputs}
                    name="address"
                    value={dependentInfo.address}
                    required={true}
                    placeholder="Address"
                  />
                </div>
                <div className="col-sm-8 pb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="apartment"
                    value={dependentInfo.apartment}
                    required={true}
                    onChange={handleDependentInputs}
                    placeholder="Apartment"
                  />
                </div>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    value={dependentInfo.city}
                    required={true}
                    onChange={handleDependentInputs}
                    name="city"
                    placeholder="City"
                  />
                </div>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={dependentInfo.state}
                    required={true}
                    onChange={handleDependentInputs}
                    placeholder="State"
                  />
                </div>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    name="zip"
                    value={dependentInfo.zip}
                    required={true}
                    onChange={handleDependentInputs}
                    placeholder="Zip"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-inline-flex align-items-center">
            <input
              type="checkbox"
              value="true"
              name="bankInfoDeclaration"
              className="form-check-input"
              required={true}
            />
            <label style={{ marginLeft: "10px" }}>
              I declare that the Bank Details furnish herein are true & correct.
            </label>
          </div>
          <div className="text-center m-2">
            <button
              className={`btn btn-primary mx-2 ${loading ? "disabled" : ""}`}
            >
              Save
            </button>
            {/* <button className="btn btn-warning mx-2">Reset</button> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default DependantInfo;

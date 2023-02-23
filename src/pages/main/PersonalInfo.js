import React, { useState } from "react";
import { useEffect } from "react";
import Switch from "react-switch";
import ResidentialTable from "../../components/table/ResidentialTable";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { useCurrentFileYear } from "../../context/useCurrentFileYear";
import { API } from "../../services/api";
import { encodeQueryData, handleSSN } from "../../utils/commonFunction";
import { getUserResidentialSchema } from "../../utils/schema";
function PersonalInfo() {
  const { currentFileYear } = useCurrentFileYear();
  const [toggleSelected, setToggleSelected] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    filing_status_id: "",
    firstName: "",
    lastName: "",
    middleName: "",
    occupation: "",
    email: "",
    preferred_timezone: "",
    ssn: "",
    dob: "",
    anniversary_date: "",
    visa_type_id: "",
    first_entry_date: "",
    // contact information
    phone: "",
    alternate_phone: "",
    indian_phone: "",
    mailing_address: "",
    appartment: "",
    city: "",
    state: "",
    zip: "",
    is_more_employer: toggleSelected === true ? 1 : 0,
    employer_info: "",
    user_residential_address: {},
    spouse_identity_info: {},
    spouse_residential_address: {},
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "ssn") {
      value = handleSSN(e);
    }
    setPersonalInfo({ ...personalInfo, [name]: value });
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

  // spouse details
  const [spouseDetails, setSpouseDetails] = useState({
    fname: "",
    mname: "",
    lname: "",
    dob: "",
    visa_type_id: null,
    first_entry_date: "",
    occupation: "",
    irs_status_id: null,
    ssn_itin: "",
  });

  const handleSpouseInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "spouseSsn") {
      value = handleSSN(e);
    }
    setSpouseDetails({ ...personalInfo, [name]: value });
  };

  // Add spouse residential
  const [spouseResidential, setSpouseResidential] = useState(
    getUserResidentialSchema(currentFileYear)
  );

  const addSpouseResidentialTableRow = (year) => {
    setSpouseResidential((prevUserResidential) => {
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

  const deleteSpouseResidentialTableRow = (index) => {
    setSpouseResidential((prevUserResidential) => {
      const newData = {};
      Object.assign(newData, prevUserResidential);
      newData.data.splice(index, 1);
      return newData;
    });
  };
  // handle change of resendtial
  const handleSpouseResidentialChange = (name, value, index) => {
    setSpouseResidential((prevUserResidential) => {
      const newData = {};
      Object.assign(newData, prevUserResidential);
      newData.data[index][name] = value;
      return newData;
    });
  };

  const handleChange = (event) => {
    setToggleSelected(event);
    setPersonalInfo({ ...personalInfo, is_more_employer: event === true ? 1 : 0 })
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    personalInfo.user_residential_address = userResidential;
    personalInfo.fullname = personalInfo.firstName + ' ' + personalInfo.middleName + ' ' + personalInfo.lastName;
    const queryData = { year: 'George' };
    const querystring = encodeQueryData(queryData);
    const result = await API.savePersonalInfo(querystring, personalInfo);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };

  // Get the personal info details

  useEffect(() => {
    API.getPersonalInfo(encodeQueryData({ year: currentFileYear })).then(res => {
      const pInfo = res?.data
      if (Object.keys(pInfo).length > 0) {
        const fullNameSplit = pInfo.fullname.split(' ');
        setPersonalInfo({ ...personalInfo, firstName: fullNameSplit[0], middleName: fullNameSplit[1], lastName: fullNameSplit[2], ...pInfo });
        setSpouseDetails({ ...spouseDetails, ...pInfo.spouseIdentityInfo })
        pInfo.is_more_employer === 1 ? setToggleSelected(true) : setToggleSelected(false);

        if (pInfo?.userResidentialAddressInfo?.data && pInfo.userResidentialAddressInfo.data.length > 0) {
          setUserResidential({ ...pInfo.userResidentialAddressInfo });
        }
        if (pInfo?.spouseResidentialAddressInfo?.data && pInfo.spouseResidentialAddressInfo.data.length > 0) {
          setSpouseResidential({ ...pInfo.spouseResidentialAddressInfo });
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFileYear])

  return (
    <>
      <div className="container-fluid main_body_container">
        <form onSubmit={handleSubmit} className="">
          <div className="row">
            <div className="col-12 h4">
              <b> Personal Identity Information </b>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="col-12">
                    <div className="form-group row">
                      <label
                        className="col-sm-4 col-form-label"
                        htmlFor="martial_status"
                      >
                        <b> Filing Status </b>
                      </label>
                      <div className="col-sm-8">
                        <select
                          className="form-control "
                          id="filing_status_id"
                          name="filing_status_id"
                          required={true}
                          onChange={handleInputs}
                          value={personalInfo.filing_status_id}
                        >
                          <option value="">Please Select</option>
                          <option value="1">Single</option>
                          <option value="2">Married filing jointly</option>
                          <option value="3">Married filing seperately</option>
                          <option value="4">Head of Household</option>
                          <option value="5">Divorce</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="name">
                        <b> Name </b>
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-control "
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          required={true}
                          onChange={handleInputs}
                          type="text"
                          value={personalInfo.firstName}

                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-4"></div>
                      <div className="col-sm-8">
                        <input
                          className="form-control  my-2"
                          id="middleName"
                          name="middleName"
                          onChange={handleInputs}
                          placeholder="Middle Name"
                          type="text"
                          value={personalInfo.middleName}

                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-4"></div>
                      <div className="col-sm-8">
                        <input
                          className="form-control "
                          id="lastName"
                          name="lastName"
                          onChange={handleInputs}
                          placeholder="Last name"
                          required={true}
                          type="text"
                          value={personalInfo.lastName}

                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group row">
                      <label
                        className="col-sm-4 col-form-label"
                        htmlFor="occupation"
                      >
                        <b> Occupation </b>
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-control  my-2"
                          id="occupation"
                          name="occupation"
                          onChange={handleInputs}
                          placeholder="Occupation"
                          type="text"
                          required={true}
                          value={personalInfo.occupation}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group row">
                      <label
                        className="col-sm-4 col-form-label"
                        htmlFor="occupation"
                      >
                        <b> Email </b>
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-control  my-2"
                          id="email"
                          name="email"
                          onChange={handleInputs}
                          placeholder="Email"
                          required={true}
                          type="email"
                          value={personalInfo.email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group row">
                      <label
                        className="col-sm-4 col-form-label"
                        htmlFor="preferred_timezone"
                      >
                        <b> Timezone </b>
                      </label>
                      <div className="col-sm-8">
                        <select
                          className="form-control  my-2"
                          id="preferred_timezone"
                          name="preferred_timezone"
                          required={true}
                          onChange={handleInputs}
                          value={personalInfo.preferred_timezone}
                        >
                          <option value="CST">
                            Central Standard Time(CST)
                          </option>
                          <option value="EST">
                            Eastern Standard Time(EST)
                          </option>
                          <option value="MST">
                            Mountain Standard Time(MST)
                          </option>
                          <option value="PST">
                            Pacific Standard Time(PST)
                          </option>
                          <option value="IST">Indian Standard Time(IST)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="ssn">
                        <b> SSN </b>
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-control  my-2"
                          id="ssn"
                          maxLength="11"
                          name="ssn"
                          placeholder="Eg: 888-88-8888"
                          size="12"
                          type="text"
                          required={true}
                          value={personalInfo.ssn}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" htmlFor="dob">
                        <b> Date of birth </b>
                      </label>
                      <div className="col-sm-8 d-inline-flex">
                        <input
                          className="form-control  my-2"
                          name="dob"
                          placeholder="MM-DD-YYYY"
                          required={true}
                          onChange={handleInputs}
                          type="date"
                          value={personalInfo.dob}
                        />
                      </div>
                    </div>
                  </div>
                  {personalInfo.filing_status_id !== 1 && (
                    <div className="col-12">
                      <div className="form-group row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="anniversary_date"
                          >
                          <b> Anniversary </b>
                        </label>
                        <div className="col-sm-8 d-inline-flex">
                          <input
                            className="form-control  my-2"
                            name="anniversary_date"
                            placeholder="MM-DD-YYYY"
                            required={true}
                            onChange={handleInputs}
                            type="date"
                            value={personalInfo.anniversary_date}

                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-12">
                    <div className="form-group row">
                      <label
                        className="col-sm-4 col-form-label"
                        htmlFor="visa_type_id"
                      >
                        <b> Visa Type </b>
                      </label>
                      <div className="col-sm-8">
                        <select
                          className="form-control  my-2"
                          id="visa_type_id"
                          name="visa_type_id"
                          onChange={handleInputs}
                          required={true}
                          value={personalInfo.visa_type_id}
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
                  <div className="col-12">
                    <div className="form-group row">
                      <label
                        className="col-sm-4 col-form-label"
                        htmlFor="first_entry_date"
                      >
                        <abbr title="Fist Date of Entry (DOE) in the United States">
                          <b> First Entry </b>
                        </abbr>
                      </label>
                      <div className="col-sm-8 d-inline-flex">
                        <input
                          className="form-control  my-2"
                          id="first_entry_date"
                          name="first_entry_date"
                          onChange={handleInputs}
                          placeholder="MM-DD-YYYY"
                          readOnly=""
                          type="date"
                          value={personalInfo.first_entry_date}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 h4 my-3">
              <b> Contact Information </b>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="col-12 row">
                    <div className="col-sm-3">
                      <label className="col-form-label" htmlFor="phone">
                        <b> Phone </b>
                      </label>
                    </div>
                    <div className="col-sm-9 row">
                      <div className="col-sm-4 pb-2">
                        <input
                          className="form-control "
                          id="phone"
                          name="phone"
                          placeholder="Mobile"
                          type="tel"
                          onChange={handleInputs}
                          required={true}
                          value={personalInfo.phone}
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-control "
                          id="alternate_phone"
                          name="alternate_phone"
                          onChange={handleInputs}
                          placeholder="alternate_phone"
                          type="tel"
                          value={personalInfo.phone}
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-control "
                          id="indian_phone"
                          name="indian_phone"
                          onChange={handleInputs}
                          placeholder="Indian No."
                          type="tel"
                          value={personalInfo.indian_phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 row">
                    <div className="col-sm-3">
                      <label
                        className="col-form-label"
                        htmlFor="mailing_address"
                      >
                        <b> Mailing Address </b>
                      </label>
                    </div>
                    <div className="col-sm-9 row">
                      <div className="col-sm-8 pb-2">
                        <input
                          className="form-control "
                          id="mailing_address"
                          name="mailing_address"
                          placeholder="mailing address"
                          onChange={handleInputs}
                          type="text"
                          value={personalInfo.mailing_address}
                        />
                      </div>
                      <div className="col-sm-4 pb-2">
                        <input
                          className="form-control  my-2"
                          name="appartment"
                          placeholder="Apartment #"
                          onChange={handleInputs}
                          type="text"
                          value={personalInfo.lastName}
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-control  my-2"
                          id="city"
                          name="city"
                          onChange={handleInputs}
                          placeholder="City"
                          type="text"
                          value={personalInfo.city}
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-control  my-2"
                          id="state"
                          name="state"
                          placeholder="State"
                          onChange={handleInputs}
                          type="text"
                          value={personalInfo.state}
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-control  my-2"
                          id="zip"
                          name="zip"
                          placeholder="Zip"
                          onChange={handleInputs}
                          type="text"
                          value={personalInfo.zip}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 my-3">
              <h4>
                <b>
                  Residential Address(es) during tax year
                  <span className="h6">
                    [Please list out all the address(es) you stayed at during
                    the tax year]
                  </span>
                </b>
              </h4>
              <div className="card">
                <div className="card-body p-0">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Tax Year</th>
                        <th className="text-center">State of Residence</th>
                        <th className="text-center">From</th>
                        <th className="text-center">To</th>
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
            <div className="col-12 my-2">
              <div className="row">
                <div className="col-4">
                  <p> Have you worked with more than one employer in 2020?</p>
                </div>
                <div className="col-1">
                  <Switch onChange={handleChange} checked={toggleSelected} />
                </div>
              </div>
              {toggleSelected && (
                <div
                  className="my-2 collapse"
                  style={{ display: "block" }}
                  id="did_spouse_work"
                >
                  <textarea
                    className="form-control "
                    id="employer_info"
                    name="employer_info"
                    placeholder="Please provide details"
                    type="text"
                    onChange={handleInputs}
                    required={true}
                    value={personalInfo.employer_info}
                  ></textarea>
                </div>
              )}
            </div>
          </div>

          {/* Spouse's Identity information */}

          {personalInfo.filing_status_id.toString() !== "1" && (
            <div className="row">
              <div className="col-12 " id="spouse_details">
                <h4 className="my-3">
                  <b> Spouse's Identity Information </b>
                </h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="col-12">
                          <div className="form-group row">
                            <label
                              className="col-sm-4 col-form-label"
                              htmlFor="name"
                            >
                              <b> Name </b>
                            </label>
                            <div className="col-sm-8">
                              <input
                                className="form-control "
                                id="fname"
                                name="fname"
                                placeholder="First Name"
                                onChange={handleSpouseInputs}
                                required={true}
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-8">
                              <input
                                className="form-control  my-2"
                                id="mname"
                                name="mname"
                                onChange={handleSpouseInputs}
                                placeholder="Middle Name"
                                required={true}
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-8">
                              <input
                                className="form-control "
                                id="lname"
                                name="lname"
                                placeholder="Last Name"
                                onChange={handleSpouseInputs}
                                required={true}
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group row">
                            <label
                              className="col-sm-4 col-form-label"
                              htmlFor="dob"
                            >
                              <b> Date of birth </b>
                            </label>
                            <div className="col-sm-8">
                              <input
                                className="form-control  my-2"
                                id="dob"
                                name="dob"
                                onChange={handleSpouseInputs}
                                placeholder="MM-DD-YYYY"
                                required={true}
                                type="date"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group row">
                            <label
                              className="col-sm-4 col-form-label"
                              htmlFor="visa_type_id"
                            >
                              <b> Visa Type </b>
                            </label>
                            <div className="col-sm-8">
                              <select
                                className="form-control  my-2"
                                id="visa_type_id"
                                name="visa_type_id"
                                onChange={handleSpouseInputs}
                                required={true}
                              >
                                <option value="">Please Select</option>
                                <option value="F1">F1</option>
                                <option value="F2">F2</option>
                                <option value="H1">H1</option>
                                <option value="H4">H4</option>
                                <option value="L1">L1</option>
                                <option value="L2">L2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="J1">J1</option>
                                <option value="J4">J4</option>
                                <option value="us_citizen">U.S Citizen</option>
                                <option value="green_card">Green Card</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group row">
                            <label
                              className="col-sm-4 col-form-label"
                              htmlFor="first_entry_date"
                            >
                              <abbr title="First Date of Entry (DOE) in the United States">
                                <b> First Entry </b>
                              </abbr>
                              (if any)
                            </label>
                            <div className="col-sm-8">
                              <input
                                className="form-control  my-2"
                                id="first_entry_date"
                                name="first_Entry_date"
                                placeholder="MM-DD-YYYY"
                                onChange={handleSpouseInputs}
                                required={true}
                                type="date"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group row">
                            <label
                              className="col-sm-4 col-form-label"
                              htmlFor="occupation"
                            >
                              <b> Occupation </b>
                            </label>
                            <div className="col-sm-8">
                              <input
                                className="form-control  my-2"
                                id="occupation"
                                name="occupation"
                                placeholder="Occupation"
                                onChange={handleSpouseInputs}
                                required={true}
                                r
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label">
                              <b> IRS Status </b>
                            </label>
                            <div className="col-sm-8">
                              <select
                                name="irs_status_id"
                                id="irs_status_id"
                                className="form-control"
                                onChange={handleSpouseInputs}
                              >
                                <option value="">Select</option>
                                <option value="1">SSN</option>
                                <option value="2">ITIN</option>
                                <option value="3">
                                  Applying ITIN
                                </option>
                                <option value="4">
                                  Renewing ITIN
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {spouseDetails.irs_status_id > 0 && (
                          <div className="col-12">
                            <div className="form-group row">
                              <label className="col-sm-4 col-form-label">
                                SSN/ITIN
                              </label>
                              <div className="col-sm-8">
                                <div className="my-2" id="spouse_unique_no">
                                  <input
                                    className="form-control "
                                    id="spouseSsn"
                                    maxLength="11"
                                    name="spouseSsn"
                                    placeholder="SSN/ITIN"
                                    type="text"
                                    required={true}
                                    value={spouseDetails.ssn}
                                    onChange={handleSpouseInputs}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h4 className="my-3">
                  <b>
                    Residential Address(es) during tax year
                    <span className="h6">
                      [Please list out all the address(es) that your spouse
                      stayed at during the tax year]
                    </span>
                  </b>
                </h4>
                <div className="card">
                  <div className="card-body p-0">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Tax Year</th>
                          <th className="text-center">State of Residence</th>
                          <th className="text-center">From</th>
                          <th className="text-center">To</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <ResidentialTable
                          rowsData={spouseResidential}
                          deleteResidentialTableRow={
                            deleteSpouseResidentialTableRow
                          }
                          addResidentialTableRow={addSpouseResidentialTableRow}
                          handleResidentialChange={
                            handleSpouseResidentialChange
                          }
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-100"></div>
            </div>
          )}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input "
              id="basicInfoDeclaration"
              name="basicInfoDeclaration"
              type="checkbox"
              value="true"
            />
            <label className="form-check-label" htmlFor="basicInfoDeclaration">
              I Declare that the information in this application is true and
              correct
            </label>
          </div>

          <div className="text-center m-2">
            <button className={`btn btn-primary ${loading === true ? "disabled" : ""}`}>Save</button>
            {/* <button className="btn btn-secondary" disabled="">
              Reset
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalInfo;

import React, { useEffect, useState } from "react";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { API } from "../../services/api";
import { editProfileSchema, updatePasswordSchema } from "../../utils/schema";

function Settings() {
  const [tab, setTab] = useState("editProfile");
  const setTabHandler = (tab) => {
    setTab(tab);
  };

  const [profile, setProfile] = useState(editProfileSchema());
  const [password, setPassword] = useState(updatePasswordSchema());

  const handleProfileInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setPassword({ ...password, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await API.updateProfile(profile);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await API.updatePassword(password);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };


  useEffect(() => {
    API.getProfile().then(res => {
      const {fullname,phone,email} = res;
      setProfile(prev => {
        return {
          ...prev,
          name : fullname,
          phone,
          email
        }
      })
    })
  },[])
  return (
    <div className="container-fluid main_body_container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card">
            <div className="card-header h2 px-2">Settings</div>
            <div type="pills" className="tab-container my-2 mx-2">
              <ul className="nav nav-pills" role="tablist" aria-label="Tabs">
                <li className="nav-item">
                  <label
                    className={
                      tab === "editProfile" ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setTabHandler("editProfile")}
                  >
                    <span>Edit Profile</span>
                  </label>
                </li>
                <li
                  className="nav-item"
                  onClick={() => setTabHandler("changePassword")}
                >
                  <label
                    className={
                      tab === "changePassword" ? "nav-link active" : "nav-link"
                    }
                  >
                    <span>Change Password</span>
                  </label>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  heading="Edit Profile"
                  className={
                    tab === "editProfile" ? "tab-pane active" : "tab-pane"
                  }
                  role="tabpanel"
                  aria-labelledby=""
                >
                  <div
                    className="card-body"
                    style={{ backgroundColor: "#F5F5F5" }}
                  >
                    <form
                      onSubmit={handleProfileSubmit}
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          className="form-control ng-untouched ng-pristine ng-valid"
                          name="name"
                          type="text"
                          onChange={handleProfileInputs}
                          required={true}
                          value={profile.name}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Phone No</label>
                        <input
                          className="form-control ng-untouched ng-pristine ng-valid"
                          name="phone"
                          type="text"
                          onChange={handleProfileInputs}
                          required={true}
                          value={profile.phone}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Email ID</label>
                        <input
                          className="form-control ng-untouched ng-pristine ng-valid"
                          name="email"
                          type="text"
                          onChange={handleProfileInputs}
                          required={true}
                          value={profile.email}
                        />
                      </div>
                      <button
                        className={`btn btn-primary rounded mt-2 ${
                          loading ? "disabled" : ""
                        }`}
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  heading="Change Password"
                  className={
                    tab === "changePassword" ? "tab-pane active" : "tab-pane"
                  }
                  role="tabpanel"
                  aria-labelledby=""
                >
                  <div className="card-body">
                    <form
                      onSubmit={handlePasswordSubmit}
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <div className="form-group">
                        {/* <label htmlFor="name">Email</label>
                        <input
                          className="form-control ng-untouched ng-pristine ng-valid"
                          name="email"
                          type="text"
                        /> */}
                        <label htmlFor="name">Current Password</label>
                        <input
                          className="form-control ng-untouched ng-pristine ng-valid"
                          name="currentPassword"
                          type="password"
                          onChange={handlePasswordInputs}
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">New Password</label>
                        <input
                          className="form-control ng-untouched ng-pristine ng-valid"
                          name="newPassword"
                          type="password"
                          onChange={handleProfileInputs}
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Confirm Password</label>
                        <input
                          className="form-control ng-untouched ng-pristine ng-valid"
                          name="confirmPassword"
                          type="text"
                          onChange={handleProfileInputs}
                          required={true}
                        />
                      </div>
                      <button
                        className={`btn btn-primary rounded mt-2 ${
                          loading ? "disabled" : ""
                        }`}
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Settings;

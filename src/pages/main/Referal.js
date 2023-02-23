import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { API } from "../../services/api";
import { referralSchema } from "../../utils/schema";

function Referal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [referral, setReferral] = useState(referralSchema());
  const [refData, setRefData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setReferral({ ...referral, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await API.saveReferral(referral);
    setLoading(false);
    if (result.statusCode === 200) {
      setShow(false);
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };

  useEffect(() => {
    API.getReferralUsers().then(res => {
      const refUsers = res?.data;
      if (refUsers?.length > 0) setRefData([...refUsers]);
    })

    return () => { }
  }, [])


  return (
    <>
      <div className="container-fluid main_body_container">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>
                      <span className="pull-left">Referals</span>
                    </h2>
                    <div className="col-1 pull-right mb-3">
                      <button
                        className="btn btn-primary pull-right"
                        type="button"
                        onClick={handleShow}
                        title="Add"
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <b className="clearfix"></b>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sl. No.</th>
                          <th>Friend Name</th>
                          <th>Friend Email</th>
                          <th>Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                          {refData?.map((user, index) => {
                            return (
                              <tr key ={index + 1}>
                                <td>{index + 1}</td>
                                <td>{user.fullname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add Referal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    {/* <div className="form-group col-12">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter the Name"
                        required
                      />
                    </div> */}
                    <div className="form-group col-12">
                      <label>Email</label>
                      <input
                        type="Email"
                        className="form-control"
                        name="referral_user"
                        onChange={handleInputs}
                        placeholder="Enter the Email"
                        required={true}
                      />
                    </div>
                    {/* <div className="form-group col-12">
                      <label>Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        placeholder="Enter the Contact Number"
                        required
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <button className="btn btn-secondary pull-right">Cancel</button> */}
              <button
                className={`btn btn-primary pull-right ${loading ? "disabled" : ""
                  }`}
              >
                Save
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default Referal;

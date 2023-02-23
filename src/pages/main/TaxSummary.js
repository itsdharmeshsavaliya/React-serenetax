import React from "react";

function TaxSummary() {
  return (
    <>
      <div
        className="container-fluid mx-  main_body_container"
        style={{ marginTop: "130px", marginLeft: "220px" }}
      >
        <div className="row bg-light mx-4">
          <div className="col-lg-12">
            <h2>
              <span className="pull-left my-2">Tax Summary</span>
            </h2>
            <b className="clearfix"></b>
            <form action="">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>For</th>
                    <th>Refund</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Discount</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="please enter amount to pay"
                          name="total"
                          readOnly
                        />
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary pull-right"
                        type="submit"
                      >
                        Make payment
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaxSummary;

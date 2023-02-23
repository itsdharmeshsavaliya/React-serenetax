import React, { useEffect, useState } from "react";
import { getRentalIncomeSchema } from "../../utils/schema";
import { useCurrentFileYear } from "../../context/useCurrentFileYear";
import { API } from "../../services/api";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { encodeQueryData } from "../../utils/commonFunction";

function RentalIncome() {
  const { currentFileYear } = useCurrentFileYear();
  const [rentalIncome, setRentalIncome] = useState(getRentalIncomeSchema(currentFileYear))

  const handelInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setRentalIncome({ ...rentalIncome, [name]: value });
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await API.saveRentalIncome(rentalIncome);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };

  useEffect(() => {
    API.getRentalIncome(encodeQueryData({ year: currentFileYear })).then(res => {
      const rentalIncomeInfo = res?.data?.rentalIncomeInfo;
      if (Object.keys(rentalIncome).length > 0)
        setRentalIncome({ ...rentalIncomeInfo })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFileYear])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container-fluid main_body_container">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Building value</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="building_value"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.building_value}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Land Value</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="land_value"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.land_value}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Address of the property</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="property_address"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.property_address}
                    placeholder="123 Example St., City, State"
                  />
                </td>
              </tr>

              <tr>
                <th>Number of days rented during the year</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="number_of_days_rented"
                    onChange={handelInputs}
                    value={rentalIncome.number_of_days_rented}
                    required={true}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Date of property Purchased</th>
                <td>
                  <input
                    type="date"
                    className="form-control"
                    name="property_purchased_date"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.property_purchased_date}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Property holder</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="property_holder"
                    onChange={handelInputs}
                    value={rentalIncome.property_holder}
                    required={true}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Income</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="income"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.income}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Rents Received</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="rents_received"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.rents_received}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Royalties Received</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="royalties_received"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.royalties_received}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Expenses</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="expenses"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.expenses}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Mortgage Interest</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="mortgage_interest"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.mortgage_interest}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Other Interest</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="other_interest"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.other_expenses}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Insurance</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="insurance"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.insurance}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Repairs</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="repairs"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.repairs}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Auto & Travel</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="auto_travel"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.auto_travel}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Advertising</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="advertising"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.advertising}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Taxes</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="taxes"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.taxes}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Legal & Other Professional Fees</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="legal_professional_fees"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.legal_professional_fees}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Cleaning & Maintenance</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="cleaning_maintenance"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.cleaning_maintenance}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Commissions</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="commissions"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.commissions}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Utilities</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="utilities"
                    placeholder="US$"
                    onChange={handelInputs}
                    value={rentalIncome.utilities}
                    required={true}
                  />
                </td>
              </tr>

              <tr>
                <th>Management Fees</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="management_fees"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.management_fees}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Supplies</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="supplies"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.supplies}
                    placeholder="US$"
                  />
                </td>
              </tr>

              <tr>
                <th>Other Expenses</th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="other_expenses"
                    onChange={handelInputs}
                    required={true}
                    value={rentalIncome.other_expenses}
                    placeholder="US$"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="form-check form-check-inline mx-3">
            <input
              className="form-check-input ng-untouched ng-pristine ng-valid"
              id="basicInfoDeclaration"
              name="basicInfoDeclaration"
              type="checkbox"
              value="true"
              required={true}
            />
            <label className="form-check-label" htmlFor="basicInfoDeclaration">
              I Declare that the information in this application is true and
              correct
            </label>
          </div>
          <div className="text-center m-2">
            <button className={`btn btn-primary ${loading ? "disabled" : ""}`} >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default RentalIncome;

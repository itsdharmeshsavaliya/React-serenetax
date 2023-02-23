import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function ResidentialTable({
  rowsData,
  deleteResidentialTableRow,
  addResidentialTableRow,
  handleResidentialChange,
}) {
  const { data, year } = rowsData;
  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <tr>
              <th rowSpan="2">{index === 0 ? year : ""}</th>
            </tr>
            <tr>
              <td className="text-center">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  type="text"
                  name="state_of_residence"
                  value={item.state_of_residence}
                  onChange={(e) =>
                    handleResidentialChange(
                      e.target.name,
                      e.target.value,
                      index
                    )
                  }
                  required={true}
                />
              </td>
              <td>
                <div className="row">
                  <div className="form-group col-12">
                    <input
                      className="form-control ng-untouched ng-pristine ng-valid"
                      placeholder="MM-DD-YYYY"
                      type="date"
                      name="from_date"
                      value={item.from_date}
                      onChange={(e) =>
                        handleResidentialChange(
                          e.target.name,
                          e.target.value,
                          index
                        )
                      }
                      required={true}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  <div className="form-group col-12">
                    <input
                      className="form-control ng-untouched ng-pristine ng-valid"
                      placeholder="MM-DD-YYYY"
                      type="date"
                      name="to_date"
                      value={item.to_date}
                      onChange={(e) =>
                        handleResidentialChange(
                          e.target.name,
                          e.target.value,
                          index
                        )
                      }
                      required={true}
                    />
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="btn btn-primary rounded mx-2"
                  onClick={() => addResidentialTableRow(year)}
                  title="Add"
                >
                  <FaPlus></FaPlus>
                </span>
                {index !== 0 && (
                  <span
                    title="Remove"
                    className="btn btn-danger rounded"
                    disabled=""
                    onClick={() => deleteResidentialTableRow(index)}
                  >
                    <FaMinus></FaMinus>
                  </span>
                )}
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
}

export default ResidentialTable;

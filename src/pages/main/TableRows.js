import { FaUpload, FaDownload, FaMinus } from "react-icons/fa";

function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((index) => {
    return (
      <tr key={index}>
        <td>
          <input type="text" name="fileName" className="form-control" />
        </td>
        <td>
          <select
            className="form-control ng-pristine ng-valid ng-touched"
            id="docType"
            name="doc_type"
          >
            <option value="undfined">Select</option>
            <option value="W2-wage statement">W2-wage statement</option>
            <option value="Personal id proof">Personal id proof</option>
            <option value="1099 INT">1099 INT</option>
            <option value="1099 DIV">1099 DIV</option>
            <option value="1099-G State Tax Refund">
              1099-G State Tax Refund
            </option>
            <option value="1099 MISC ( Self-employed business income )">
              1099 MISC ( Self-employed business income )
            </option>
            <option value="1099-B Stock Doc">1099-B Stock Doc</option>
            <option value="1099 -R">1099 -R</option>
            <option value="1099-R (401k plan)">1099-R (401k plan)</option>
            <option value="5498 -SA ">5498 -SA </option>
            <option value="1098-T (Tuition fees)">1098-T (Tuition fees)</option>
            <option value="1098-E (interest on your student loan)">
              1098-E (interest on your student loan)
            </option>
            <option value="1120-K1">1120-K1</option>
            <option value="1065-k1">1065-k1</option>
            <option value="1042-S">1042-S</option>
            <option value="Residents of MA - 1099HC">
              Residents of MA - 1099HC
            </option>
            <option value="Child/Dependent Care expenses (SSN/Tax ID required)">
              Child/Dependent Care expenses (SSN/Tax ID required)
            </option>
          </select>
        </td>
        <td>
          <input type="text" name="comments" className="form-control" />
        </td>
        <td>
          <input className="form-control overflow-hidden" type="file" />
        </td>
        <td style={{ width: "22%" }}>
          <button className="btn btn-success rounded">
            <FaUpload />
          </button>
          <button className="btn btn-secondary rounded">
            <FaDownload />
          </button>
          <button
            className="btn btn-danger rounded mx-2"
            disabled=""
            onClick={() => deleteTableRows(index)}
          >
            <FaMinus />
          </button>
        </td>
      </tr>
    );
  });
}
export default TableRows;

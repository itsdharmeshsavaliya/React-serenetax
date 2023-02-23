import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { useCurrentFileYear } from "../../context/useCurrentFileYear";
import { API } from "../../services/api";
import { encodeQueryData } from "../../utils/commonFunction";
import { getDocumentListSchema, getDocumentSchema } from "../../utils/schema";

function UploadDocument() {
  const { currentFileYear } = useCurrentFileYear();
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [document, setDocument] = useState(getDocumentSchema(currentFileYear))
  const [file, setFile] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData();
    formData.append("year", document.year);
    formData.append("document_name", document.document_name);
    formData.append("document_type_id", document.document_type_id);
    formData.append("document_comments", document.document_comments);
    formData.append("document_file", file, document.document_name + '.png');
    const result = await API.uploadDocument(formData);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  }
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    // if (name === "document_file") setFile(e.target.files[0])
    setDocument({ ...document, [name]: value })
  }
  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  useEffect(() => {
    API.getDocumentsList(encodeQueryData({ year: currentFileYear })).then(res => {
      const documentsInfo = res?.data?.documentsInfo;
      if (documentsInfo.length > 0) {
        setDocuments(documentsInfo);
      }
    })
  }, [currentFileYear])
  return (
    <>
      <div
        className="container-fluid mx-  main_body_container"
        style={{ marginTop: "130px", marginLeft: "220px" }}
      >
        <div className="card container-fluid">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Document Name</th>
                    <th>Document Type</th>
                    <th>Comments</th>
                    <th>Upload File</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="document_name"
                        required={true}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <select
                        className="form-control ng-pristine ng-valid ng-touched"
                        id="document_type_id"
                        name="document_type_id"
                        required={true}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="1">W2-wage statement</option>
                        <option value="2">Personal id proof</option>
                        <option value="3">1099 INT</option>
                        <option value="4">1099 DIV</option>
                        <option value="5">1099-G State Tax Refund</option>
                        <option value="6">
                          1099 MISC ( Self-employed business income )
                        </option>
                        <option value="7">1099-B Stock Doc</option>
                        <option value="8">1099 -R</option>
                        <option value="9">1099-R (401k plan)</option>
                        <option value="10">5498 -SA </option>
                        <option value="11">1098-T (Tuition fees)</option>
                        <option value="12">
                          1098-E (interest on your student loan)
                        </option>
                        <option value="13">1120-K1</option>
                        <option value="14">1065-k1</option>
                        <option value="15">1042-S</option>
                        <option value="16">Residents of MA - 1099HC</option>
                        <option value="17">
                          Child/Dependent Care expenses (SSN/Tax ID required)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="document_comments"
                        required={true}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control overflow-hidden"
                        type="file"
                        name="document_file"
                        onChange={handleFileChange}
                      />
                    </td>
                    <td style={{ width: "22%" }}>
                      <button type="submit" className={`btn btn-success rounded ${loading ? "disabled" : ""}`} title ="Upload Document">
                        <FaUpload />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <table className="table mt-5">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Document Name</th>
                  <th>Document Type</th>
                  <th>Comments</th>
                  <th>file</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => {
                  const docList = getDocumentListSchema().filter(item => item.document_type_id.toString() === doc.document_type_id.toString())
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{doc.document_name}</td>
                      <td>{docList[0].document_type}</td>
                      <td>{doc.document_comments}</td>
                      <td><img src={`${doc.document_file}`} alt={doc.document_name} style={{objectFit:'contain'}} width={200} height={200} /></td>
                    </tr>
                  )
                })}
                {document.length === 0 && "No data"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadDocument;

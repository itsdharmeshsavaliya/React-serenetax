import axios from "axios";
import { resetLocalStorage } from "../utils/commonFunction.js";
// const basePath = "http://localhost:5000/";
// const basePath = "http://192.168.29.238:5000/";
// const basePath = "http://192.168.38.90:5000/";
// const basePath = "http://sampledemo.co.in/";
const basePath = "http://13.232.30.60:5000/";
const get = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token")
    }
  });
  try {
    resetLocalStorage(res.statusCode)
    return res.json();
  } catch (e) {
    // checking the 401 statusCode
    const data = await res.text();
    return data;
  }
};
const postJsonForm = async (url, data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
    body: JSON.stringify(data),
  });

  const dataObj = await res.json();
  // checking the 401 statusCode
  resetLocalStorage(res.statusCode)
  return {
    statusCode: res.status,
    ...dataObj,
  };
};

const postFormData = async (url, data) => {
  const res = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
    body: data,
  });
  const dataObj = await res.json();
  // checking the 401 statusCode
  resetLocalStorage(res.statusCode)
  return {
    statusCode: res.status,
    ...dataObj,
  };
};

const postUploadDoc = async (url, data) => {
  const res = await axios.post(url, data, {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + localStorage.getItem("access_token")
    },
  })
  console.log(res)
  // checking the 401 statusCode
  resetLocalStorage(res.status)
  return {
    statusCode: res.status,
    ...res.data,
  };
}

// const postParams = async (uri, data) => {
//   const res = await fetch(uri, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams(data),
//   });
//   try {
//     const data = await res.json();
//     return data.json();
//   } catch (e) {
//     const data = await res.text();
//     return data;
//   }
// };

export const API = {
  getUser: (id) => get("getUser?id=" + id),
  getProfile: () => get(`${basePath}api/client/profile`),
  getPersonalInfo: (query) => get(`${basePath}api/client/personalinfo?${query}`),
  getDependentInfo: (query) => get(`${basePath}api/client/dependentinfo?${query}`),
  getBankDetails: () => get(`${basePath}api/client/bankdetails`),
  getDocumentsList: (query) => get(`${basePath}api/client/documents?${query}`),
  getRentalIncome: (query) => get(`${basePath}api/client/rentalincome/info?${query}`),
  getFbar: () => get(`${basePath}api/client/fbar`),
  getReferralUsers: () => get(`${basePath}api/client/referralUsers`),
  getInboxMessages: () => get(`${basePath}api/client/messages`),
  register: (body) => postJsonForm(`${basePath}api/client/register`, body),
  login: (body) => postJsonForm(`${basePath}api/client/login`, body),
  savePersonalInfo: (query, body) => postJsonForm(`${basePath}api/client/personalinfo/save?${query}`, body),
  saveDependentInfo: (body) => postJsonForm(`${basePath}api/client/dependentinfo/save`, body),
  saveBankDetails: (body) => postJsonForm(`${basePath}api/client/bankdetails/save`, body),
  saveFbarDetails: (body) => postJsonForm(`${basePath}api/client/fbar/save`, body),
  saveDocuments: (formData) => postFormData(`${basePath}api/client/documents/save`, formData),
  saveReferral: (body) => postJsonForm(`${basePath}api/client/referralUsers/add`, body),
  saveMessage: (body) => postJsonForm(`${basePath}api/client/messages/send`, body),
  updateProfile: (body) => postJsonForm(`${basePath}api/client/editProfile`, body),
  updatePassword: (body) => postJsonForm(`${basePath}api/client/changepassword`, body),
  saveRentalIncome: (body) => postJsonForm(`${basePath}api/client/rentalincome/save`, body),
  uploadDocument: (data) => postUploadDoc(`${basePath}api/client/documents/save`, data),
};

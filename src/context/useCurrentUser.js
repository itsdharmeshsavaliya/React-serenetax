import React from "react";
import { API } from "../services/api";
export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  const setCurrentUserData = (userData) => {
    setCurrentUser(userData);
  };
  const fetchCurrentUser = async () => {
    let response = await API.getProfile();
    setCurrentUser(response);
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUserData, fetchCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);

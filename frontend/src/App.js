import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "./routes";
import AuthContext from "./context/AuthContext";

function App() {
  const router = useRoutes(routes);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const login = (userInfos, token) => {
    setToken(token);
    console.log(userInfos);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = () => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setUserInfos(userData);
          setIsLoggedIn(true);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [login, logout]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;

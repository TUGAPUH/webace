import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { privateRoutes } from "./Routes";
import Main from "../ComponentsHeaderAndHomePage/Main/Main";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebaseInit";

const AppRouter = () => {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<ErrorPage />} />
      {user &&
        privateRoutes.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
    </Routes>
  );
};

export default AppRouter;

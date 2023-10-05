import React from "react";
import style from "./errorPage.module.scss";
import { privateRoutes } from "../../Routes";
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();

  const pathCheck = () => {
    const result = privateRoutes.find((el) => {
      return location.pathname === el.path;
    });

    return result
      ? "Please log in or register first"
      : "Sorry, page doesn't exist.";
  };

  return (
    <div className={style.pageWrapper}>
      <h1>Oops!</h1>
      <p>{pathCheck()}</p>
    </div>
  );
};

export default ErrorPage;

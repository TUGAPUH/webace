import React, { useState } from "react";

export const InputContact = ({ currentHeader }) => {

  return (
    <input
      required
      type={currentHeader === "Name" ? "text" : "email"}
      maxLength={25}
      name={currentHeader === "Name" ? "user_name" : "user_email"}
      placeholder={"Your " + currentHeader}
    />
  );
};

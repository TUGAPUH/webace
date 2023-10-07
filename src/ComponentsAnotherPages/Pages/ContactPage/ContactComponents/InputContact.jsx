import React, { useEffect, useState } from "react";

export const InputContact = ({ currentHeader }) => {
  const [element, setElement] = useState({});

  useEffect(() => {
    if (currentHeader === "Name") {
      setElement({
        type: "text",
        name: "user_name",
      });
    }

    if (currentHeader === "Email") {
      setElement({
        type: "email",
        name: "user_email",
      });
    }

    if(currentHeader !== "Email" && currentHeader !== "Name"){
      setElement({
        type: "text",
        name: "undefined_text",
      });
    }

  }, [currentHeader]);

  return (
    <input
      required
      type={element.type}
      maxLength={25}
      name={element.name}
      placeholder={"Your " + currentHeader}
    />
  );
};

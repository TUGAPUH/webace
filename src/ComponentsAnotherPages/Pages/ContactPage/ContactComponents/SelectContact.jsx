import React from "react";

export const SelectContact = ({ currentValue }) => {
  const nonDisplayOption =
    currentValue.header[0].toLowerCase() + currentValue.header.slice(1);

  return (
    <select required name={currentValue.name}>
      <option value="" style={{ display: "none" }}>
        {"Select " + nonDisplayOption}
      </option>
      {currentValue.options.map((val, ind) => {
        return (
          <option value={val} key={ind}>
            {val}
          </option>
        );
      })}
    </select>
  );
};

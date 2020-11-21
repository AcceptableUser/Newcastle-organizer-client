import React from "react";
import "./ListAdder.scss";

const ListAdder = ({ handleListCreation }) => {
  return (
    <div className="list__adder__wrapper">
      <input
        onClick={handleListCreation}
        className="list__adder"
        type="button"
        value="+ Add list..."
      />
    </div>
  );
};

export default ListAdder;

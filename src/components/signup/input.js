import React from "react";

const input = props => {
  return (
    <div className="input-group">
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default input;

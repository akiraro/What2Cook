import React from "react";

const input = props => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text bg-primary text-white">
          <i className={props.icon}></i>
        </div>
      </div>

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

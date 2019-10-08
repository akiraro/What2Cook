import React from "react";

const input = props => {
  console.log(props.submitted);
  console.log(props.data);
  return (
    <div>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text bg-primary text-white">
            <i className={props.icon}></i>
          </div>
        </div>

        <input
          type={props.type}
          name={props.name}
          className={
            "form-control" +
            (props.submitted && !props.data ? " is-invalid" : " ")
          }
          placeholder={props.placeholder}
          onChange={props.onChange}
          required
        />
      </div>
      {props.submitted && !props.data && (
        <div className="text-danger">{props.errorMessage}</div>
      )}
    </div>
  );
};

export default input;

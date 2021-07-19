import React from "react";
import "./FormInput.scss";

function FormInput({ onChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />

      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
}

export default FormInput;

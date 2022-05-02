import React, { useState, useEffect } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { verifyInput } from "../../../../../logic/algorithms/security/verifyInput";
import "./signUp.css";

function Field({ label, isPassword, isEmail, value, cb }) {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setError(verifyInput(label, value));
  }, [value, label]);
  return (
    <>
      <div className="field">
        <input
          name={label.toLowerCase()}
          value={value}
          type={
            isPassword && !visible ? "password" : isEmail ? "email" : "text"
          }
          onChange={cb}
          placeholder={label}
        />
        <div className="view-me" onClick={() => setVisible(!visible)}>
          {isPassword &&
            (!visible ? (
              <VisibilityOutlinedIcon />
            ) : (
              <VisibilityOffOutlinedIcon />
            ))}
        </div>
        {error && value && <p className="error-input">{error}</p>}
      </div>
    </>
  );
}

Field.defaultProps = {
  icon: "",
  label: "Label",
  isPassword: false,
  isEmail: false,
  value: "",
  cb: () => {},
};

export default Field;

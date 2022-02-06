import React from "react";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Logo from "./Logo";

import "./contacts.css";

function Contacts() {

  return (
    <div className="contacts">
      <Logo fill={"blue"} background={"#e5f4f5"} />
      <div className="phone-email">
        <div className="email">
          <DraftsOutlinedIcon />
          <h6>someemailgoeshere@gmail.com</h6>
        </div>
        <div className="phone">
          <LocalPhoneOutlinedIcon />
          <h6>+212712785477</h6>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

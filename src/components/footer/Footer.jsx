import React from "react";
import Logo from "../contacts/Logo";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <Logo fill={"rgb(172, 172, 231)"} background={"black"} />
        <p>© 2022, Colocakesh.com, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;

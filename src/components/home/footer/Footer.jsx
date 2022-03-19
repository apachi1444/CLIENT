import React from "react";
import Logo from "../contacts/Logo";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <Logo fill={"rgb(172, 172, 231)"} background={"rgb(19, 19, 94)"} />
        <p>© 2022, Colocakesh.com, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;

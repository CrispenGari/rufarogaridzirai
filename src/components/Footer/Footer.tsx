import React from "react";
import "./Footer.css";
interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      ©&nbsp;{new Date().getFullYear()}&nbsp; Dr. Rufaro Garidzirai (PhD
      Economics), Walter Sisulu University.
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

import about from "../../data/about.json";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import experience from "../../data/experience.json";
interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__main__left">
          <div>
            <img alt="Prof RG" src="/rg.jpeg" />
          </div>
          <div>
            <h1>{about.name}</h1>
            <p>{about.title}</p>
          </div>
        </div>
        <div className="footer__contacts">
          <div className="footer__center">
            <h1>Contact Emails</h1>
            {about.contact.emails.map((email) => (
              <p key={email}>
                <HiOutlineMail className="footer__icon" />
                <span>{email}</span>
              </p>
            ))}
          </div>
          <div className="footer__right">
            <h1>Contact Phone</h1>
            {about.contact.phone.map((phone) => (
              <p key={phone}>
                <BiPhoneCall className="footer__icon" />
                <span>{phone}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <p>
        ©&nbsp;{new Date().getFullYear()}&nbsp; {about.name} ({about.title}),{" "}
        {experience.current_position.title}.
      </p>
    </div>
  );
};

export default Footer;

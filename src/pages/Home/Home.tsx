import React from "react";
import { Footer, Header } from "../../components";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { MdFolderSpecial } from "react-icons/md";
import { FcGraduationCap } from "react-icons/fc";
import { CiTextAlignJustify } from "react-icons/ci";
import { GiSoapExperiment } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";

import { RiFocus2Line } from "react-icons/ri";
import "./Home.css";
import about from "../../data/about.json";
import experience from "../../data/experience.json";
interface Props {}
const Home: React.FC<Props> = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__main">
        <div className="home__main__content">
          <div className="home__main__content__left">
            <img alt="Prof RG" src="/rg.jpeg" />
          </div>
          <div className="home__main__content__right">
            <div className="home__main__content__right__section">
              <div className="home__main__content__right__section__names">
                <h1>{about.name}</h1>
                <p>{about.title}</p>
              </div>

              <p>{about.biography}</p>
            </div>
            <hr />
            <div className="home__main__content__right__section home__main__content__right__section--contact">
              <h1>Contacts Details</h1>
              <div className="home__main__content__right__section__row__items">
                {about.contact.emails.map((email) => (
                  <p key={email}>
                    <HiOutlineMail className="home__icon" />
                    <span>{email}</span>
                  </p>
                ))}
              </div>
              <div className="home__main__content__right__section__row__items">
                {about.contact.phone.map((phone) => (
                  <p key={phone}>
                    <BiPhoneCall className="home__icon" />
                    <span>{phone}</span>
                  </p>
                ))}
              </div>
            </div>
            <hr />
            <h1 className="home__main__content__heading">Current Position</h1>
            <div className="home__main__content__current__item">
              <img
                alt={experience.current_position.title}
                src={experience.current_position.company_logo}
              />
              <div className="home__main__content__current__item__top">
                <div>
                  <h1>{experience.current_position.title}</h1>
                  <p>Joined {experience.current_position.start_date}</p>
                </div>
                {experience.current_position.description.map((desc, index) => (
                  <p key={index}>
                    <FcIdea className="home__current__icon" />
                    {desc}
                  </p>
                ))}
              </div>
            </div>
            <hr />
            <div className="home__main__content__right__section__row">
              <div className="home__main__content__right__section">
                <h1>Specialization</h1>
                {about.specializations.map((item) => (
                  <p key={item}>
                    <MdFolderSpecial className="home__icon" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
              <div className="home__main__content__right__section">
                <h1>Focus</h1>
                {about.focus.map((item) => (
                  <p key={item}>
                    <RiFocus2Line className="home__icon" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
              <div className="home__main__content__right__section">
                <h1>Academic Impact</h1>
                <p>
                  <FcGraduationCap className="home__icon" />
                  <span>H-Index ({about.academic_impact.h_index})</span>
                </p>
                <p>
                  <CiTextAlignJustify className="home__icon" />
                  <span>Citation ({about.academic_impact.citations})</span>
                </p>
              </div>
            </div>
            <hr />
            <h1 className="home__main__content__heading">General Experience</h1>
            <div className="home__main__content__right__section__row">
              {about.experience.map((exp) => (
                <div
                  key={exp.role}
                  className="home__main__content__right__section__row__experience"
                >
                  <h1>
                    <GiSoapExperiment className="home__icon" />
                    {exp.role}
                  </h1>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
            <hr />
            <h1 className="home__main__content__heading">Work Experience</h1>
            <div className="home__main__content__right__section__row">
              {experience.previous_academic_experience.map((exp) => (
                <div className="home__main__content__experience__item">
                  <div className="home__main__content__experience__item__top">
                    <img alt={exp.institution} src={exp.company_logo} />
                    <div>
                      <h1>{exp.institution}</h1>
                      <p>
                        {exp.start_date} - {exp.end_date}
                      </p>
                    </div>
                  </div>
                  <div className="home__main__content__experience__item__bottom">
                    <h2>{exp.position}</h2>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

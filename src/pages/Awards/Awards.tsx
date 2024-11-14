import React from "react";
import { Footer, Header } from "../../components";
import "./Awards.css";
import a from "../../data/academic_service_awards.json";
import s from "../../data/supervision.json";
import cp from "../../data/consulting_policy_work.json";
import { FaAward } from "react-icons/fa";
import { MdPerson, MdSupervisorAccount } from "react-icons/md";
import { IoAnalytics, IoFlaskOutline } from "react-icons/io5";

interface Props {}
const Awards: React.FC<Props> = () => {
  const awards = React.useMemo(() => a.awards, []);
  const supervision = React.useMemo(() => s.supervision, []);
  const consulting = React.useMemo(() => cp.consulting_policy_work, []);
  return (
    <div className="awards">
      <Header />
      <div className="awards__main">
        <div className="awards__main__content">
          <h1>Awards</h1>
          <hr />
          <div className="awards__main__content__row">
            {awards.map((award, index) => (
              <div className="awards__main__content__award__item" key={index}>
                <FaAward className="awards__main__content__award__item__icon" />
                <div>
                  <h1>{award.title}</h1>
                  <p>{award?.year || award?.years}</p>
                </div>
              </div>
            ))}
          </div>

          <h1>consulting experience</h1>
          <hr />
          <div className="awards__main__content__row">
            {consulting.consulting_experience.map((item, index) => (
              <div className="awards__main__content__award__item" key={index}>
                <IoFlaskOutline className="awards__main__content__award__item__icon" />
                <div style={{ flex: 1 }}>
                  <h1>{item.area}</h1>
                  <p style={{ color: "black", fontSize: ".8rem" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h1>policy analysis experience</h1>
          <hr />
          <div className="awards__main__content__row">
            {consulting.policy_analysis_experience.map((item, index) => (
              <div className="awards__main__content__award__item" key={index}>
                <IoAnalytics className="awards__main__content__award__item__icon" />
                <div style={{ flex: 1 }}>
                  <h1>{item.area}</h1>
                  <p style={{ color: "black", fontSize: ".8rem" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h1>Supervision</h1>
          <p>{supervision.total_supervised}</p>
          <hr />
          <div className="awards__main__content__row">
            {supervision.selected_projects.map((item, index) => (
              <div className="awards__main__content__award__item" key={index}>
                <MdSupervisorAccount
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h1>{item.title}</h1>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      marginTop: 3,
                    }}
                  >
                    <MdPerson
                      style={{
                        fontSize: "2rem",
                      }}
                    />
                    <div>
                      <h2
                        style={{
                          fontSize: ".8rem",
                        }}
                      >
                        {item.student}
                      </h2>
                      <p>
                        {item.completion_year} ● {item.institution}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Awards;

import React from "react";
import { Footer, Header } from "../../components";
import "./AcademicService.css";
import data from "../../data/academic_service_awards.json";
import { FaUserGraduate } from "react-icons/fa";
interface Props {}
const AcademicService: React.FC<Props> = () => {
  return (
    <div className="academic__service">
      <Header />
      <div className="academic__service__main">
        <div className="academic__service__main__content">
          <h1>Academic services </h1>
          <hr />
          <div className="academic__service__main__content__row">
            {data.academic_service.map((service, index) => (
              <div
                key={index}
                className="academic__service__main__content__item"
              >
                <FaUserGraduate className="academic__service__main__content__item__icon" />
                <div>
                  <h1>{service.role}</h1>
                  <p>{service.years}</p>
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

export default AcademicService;

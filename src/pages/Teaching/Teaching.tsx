import React from "react";
import { Footer, Header } from "../../components";
import "./Teaching.css";
import teaching from "../../data/teaching.json";
import { GiTeacher } from "react-icons/gi";

interface Props {}
const Teaching: React.FC<Props> = () => {
  return (
    <div className="teaching">
      <Header />
      <div className="teaching__main">
        <div className="teaching__main__content">
          <h1>Teaching</h1>
          <hr />
          <div className="teaching__main__content__row">
            {teaching.teaching.map((item, index) => (
              <div key={index} className="teaching__main__content__item">
                <GiTeacher className="teaching__main__content__item__top__icon" />
                <div>
                  <h1>{item.module}</h1>
                  <p>
                    {item.institution} ●{item.year}
                  </p>
                  <p>
                    Level {item.level} ● {item.role}
                  </p>
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

export default Teaching;

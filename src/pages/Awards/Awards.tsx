import React from "react";
import { Footer, Header } from "../../components";
import "./Awards.css";
interface Props {}
const Awards: React.FC<Props> = () => {
  return (
    <div className="awards">
      <Header />
      <div className="awards__main">
        <div className="awards__main__content">
          <div className="awards__main__content__item">
            <h1>HONORS / AWARDS:</h1>
            <ol>
              <li>Best emerging researcher at Walter Sisulu University 2020</li>
            </ol>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Awards;

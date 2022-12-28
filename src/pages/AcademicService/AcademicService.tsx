import React from "react";
import { Footer, Header } from "../../components";
import "./AcademicService.css";
interface Props {}
const AcademicService: React.FC<Props> = () => {
  return (
    <div className="academic__service">
      <Header />
      <div className="academic__service__main">
        <div className="academic__service__main__content">
          <div className="academic__service__main__content__item">
            <p>
              I am currently involved in the Department of Management and
              Economic and Business Sciences in different committees such as
              research, and teaching learning. The following are some of the
              services that I have been involved in:
            </p>
            <ul>
              <li>
                Nominated to be the research chair in the department from 2019
                to 2022.
              </li>
              <li>
                Serving in the International Conference on Business Resilience,
                Continuity and Regeneration scientific committee.
              </li>
              <li>Serving in the faculty research committee</li>
              <li>
                Represented the University at three international Conferences.
              </li>
              <li>
                Served as the Session Chair on the Butterworth research day.
              </li>
              <li>
                Current teaching and learning coordinator in the department.
              </li>
              <li>
                Current economics coordinator in all the Management and Human
                Resources diploma programs
              </li>
              <li>
                Serve as Non-Examination Chair in the department of Economic and
                Business Sciences
              </li>
              <li>
                Conduct econometrics and research workshops in the department
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AcademicService;

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
                Continuity and
              </li>
              <li>Regeneration scientific committee.</li>
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
            <h2>Projects</h2>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Project</th>
                  <th>Function</th>
                  <th>Year</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Walter Sisulu University</td>
                  <td>
                    Small Scale Agribusiness and rural Non-farm Enterprise
                  </td>
                  <td>Financial inclusion needs</td>
                  <td>2020</td>
                  <td>R50 000</td>
                </tr>
                <tr>
                  <td>Walter Sisulu University</td>
                  <td>Blue Economy and rural livelihood</td>
                  <td>Community engagement research</td>
                  <td>2020 </td>
                  <td>R 50 000</td>
                </tr>
                <tr>
                  <td>Walter Sisulu University</td>
                  <td>
                    Financial inclusion and financial well-being of Mthatha area
                  </td>
                  <td>Implementation</td>
                  <td>2021</td>
                  <td>R 50 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AcademicService;

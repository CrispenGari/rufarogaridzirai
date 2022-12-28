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
            <h1>PROJECTS / AWARDS:</h1>
            <h2>Awards</h2>
            <ol>
              <li>
                <strong>2022</strong> Distinguished Vice Chancellor Award for
                outstanding emerging best researcher
              </li>
              <li>
                <strong>2022</strong> Most Productive Researcher at campus
                level, Emerging Category
              </li>
              <li>
                <strong>2022</strong> Most Productive Researcher at campus
                level, Senior Category
              </li>
              <li>
                <strong>2020</strong> Most Productive Researcher at
                institutional level, Emerging Category
              </li>{" "}
            </ol>
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

export default Awards;

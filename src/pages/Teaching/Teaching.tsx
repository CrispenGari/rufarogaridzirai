import React from "react";
import { Footer, Header } from "../../components";
import "./Teaching.css";
interface Props {}
const Teaching: React.FC<Props> = () => {
  return (
    <div className="teaching">
      <Header />
      <div className="teaching__main">
        <div className="teaching__main__content">
          <div className="teaching__main__content__item">
            <p>
              Over the years l have developed expertise and experience in
              teaching the following disciplines:
            </p>
            <h2>Table 1: Subjects taught</h2>
            <table>
              <tbody>
                <tr>
                  <td>Microeconomics </td>
                  <td>Advanced Research Methodology</td>
                </tr>
                <tr>
                  <td>Macroeconomics </td>
                  <td>Economics for Auditors</td>
                </tr>
                <tr>
                  <td>Development economics </td>
                  <td>Research Methodology</td>
                </tr>
                <tr>
                  <td>Labour Economics </td>
                  <td>International Economics</td>
                </tr>
              </tbody>
            </table>
            <p>
              Moreover, below is the description and activities undertaken
              during my teaching
            </p>
            <ul>
              <li>
                Designed, and developed the Advanced Diploma in Human Resource
                Management Program
              </li>
              <li>
                Designed and developed a curriculum for Economics under Advanced
                Diploma Management
              </li>
              <li>
                Coordinated all the Economics programs under Management and
                Human Resource Management Programs
              </li>
              <li>Department coordinator for teaching and learning</li>
              <li>Attended teaching and learning workshops</li>
              <li>Co-teaching econometrics with a colleague in Mthatha.</li>
              <li>Invited as an Economics guest lecturer for Matic students</li>
              <li>
                Appointed as external moderator for North-West University,
                University of Johannesburg, University of Kwazulu Natal,
                University of Fort-Hare, Nelson Mandela University and Mancosa.
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Teaching;

import React from "react";
import { Footer, Header } from "../../components";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import "./Home.css";
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
              <h1>Prof. Rufaro Garidzirai</h1>
              <p>
                Prof. Rufaro Garidzirai, is a Y2 National Research Foundation
                (NRF) rated researcher, is a decorated scholar in the fields of
                development and macroeconomics at Walter Sisulu University.
                Recognized for his contributions with the High Productivity
                Emerging Researcher Award (2020, 2022) and the Distinguished
                Vice Chancellor Award, his dedication to understanding economic
                principles has led to over 32 publications, 200+ citations, and
                robust h- and i10-indices of 8 and 7 respectively. Prof
                Garidzirai ongoing projects continue his focus on bettering
                socioeconomic conditions across the continent through economic
                research.
              </p>
            </div>
            <div className="home__main__content__right__section">
              <h1>Contacts Details</h1>
              <p>
                <HiOutlineMail className="home__icon" />
                <span>garidzirairufaro@gmail.com</span>
              </p>
              <p>
                <BiPhoneCall className="home__icon" />
                <span>+27 81 399 4512</span>
              </p>
            </div>
            <div className="home__main__content__right__section">
              <h1>Research niche</h1>
              <ul>
                <li>Macroeconomics</li>
                <li>Development economics</li>
                <li>Environmental economics</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

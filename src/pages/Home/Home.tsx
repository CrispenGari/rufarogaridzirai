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
            <img alt="Dr RG" src="/rg.jpeg" />
          </div>
          <div className="home__main__content__right">
            <div className="home__main__content__right__section">
              <h1>Dr. Rufaro Garidzirai (PhD)</h1>
              <p>
                Rufaro Garidzirai is a Y2 National Research Foundation (NRF)
                rated researcher. His current research interests stem from the
                passion to understand the fundamentals of development economics,
                and macroeconomics. In 2020, and 2022 he won the institutional
                high productivity emerging researcher award and distinguished
                Vice Chancellor award at Walter Sisulu University. Dr Garidzirai
                has more than 32 career publications, and his work has received
                more than 200 citations up to date with an h- index of 8 and an
                i10 index of 6. Currently, Dr Garidzirai is working on several
                research projects that are in line with macroeconomics and
                development economics with the objective of improving the social
                and economic situation of the continent.
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

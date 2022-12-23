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
                Rufaro Garidzirai is a structured academic professional
                illustrating a strong history of positive student learning
                outcomes, fostered through creative curriculum delivery. He is
                skilled in sparking thought-provoking discussions to increase
                student participation and increase information retention. Rufaro
                Garidzirai is seeking a role which will leverage 8 years of
                teaching experience and strong sense of academic integrity. His
                current research interests stem from my passion to understand
                the fundamentals of development economics, macroeconomics, and
                transport economics.
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

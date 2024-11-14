import React from "react";
import { Header, Footer } from "../../components";
import "./Research.css";
import publications from "../../data/research.json";

interface Props {}
const Research: React.FC<Props> = () => {
  const research = React.useMemo(
    () => publications.research.selected_publications,
    []
  );
  return (
    <div className="research">
      <Header />
      <div className="research__main">
        <div className="research__main__content">
          <h1>Publications</h1>
          <hr />
          <div className="research__main__content__row">
            {research.map((publication, index) => (
              <div key={index} className="research__main__content__item">
                <div
                  className={
                    publication.quartile === "Q1"
                      ? "research__main__content__item__q_2"
                      : "research__main__content__item__q_1"
                  }
                >
                  {publication.quartile}
                </div>
                <p>
                  {index + 1}. {publication.authors} {publication.year}.{" "}
                  {publication.title}: <em>{publication.journal}</em>
                  {publication.volume_issue}{" "}
                  <a href={publication.doi}>{publication.doi}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Research;

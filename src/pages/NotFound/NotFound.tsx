import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components";
import "./NotFound.css";
interface Props {}
const NotFound: React.FC<Props> = () => {
  return (
    <div className={"not__found"}>
      <div className={"not__found__main"}>
        <div>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <h2>Page Not Found.</h2>
          <Link to={"/"}>Dr. Rufaro Garidzirai</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

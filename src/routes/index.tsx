import React from "react";
import { Routes as R, Route, BrowserRouter as Router } from "react-router-dom";
import { Awards, Home, NotFound, Research, Teaching } from "../pages";
interface Props {}
const Routes: React.FC<Props> = () => {
  return (
    <Router>
      <R>
        <Route path="/" caseSensitive element={<Home />} />
        <Route path="/teaching" caseSensitive element={<Teaching />} />
        <Route path="/research" caseSensitive element={<Research />} />
        <Route path="/awards" caseSensitive element={<Awards />} />
        <Route path="*" element={<NotFound />} caseSensitive />
      </R>
    </Router>
  );
};

export default Routes;

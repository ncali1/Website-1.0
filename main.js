import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Github from "./GitHub";
import VideoPage from "./VideoPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/video" component={VideoPage} />
    <Route path="/github" component={Github} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
);
export default Main;

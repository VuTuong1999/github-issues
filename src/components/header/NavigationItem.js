import React from "react";
import "./Header.css";
import CodeSVG from "../atoms/icons/CodeSVG";
import IssueOpenedSVG from "../atoms/icons/IssueOpenedSVG";
import PrSVG from "../atoms/icons/PrSVG";
import ProjectSVG from "../atoms/icons/ProjectSVG";
import InsightsSVG from "../atoms/icons/InsightsSVG";

const NavigationItem = ({ name, selected, value }) => (
  <div className="wrapper" selected={selected}>
    {name === "Code" && <CodeSVG />}
    {name === "Issues" && <IssueOpenedSVG selected />}
    {name === "Pull Requests" && <PrSVG />}
    {name === "Projects" && <ProjectSVG />}
    {name === "Insights" && <InsightsSVG />}
    <a className="Anchor" href="#">
      {name}
    </a>
    {value ? (
      <span className="count">{value}</span>
    ) : (
      <span className="count">{value}</span>
    )}
  </div>
);

export default NavigationItem;

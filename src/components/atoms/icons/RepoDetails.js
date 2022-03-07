import React from "react";
import WatchSVG from "../atoms/icons/svg/WatchSVG";
import StarSVG from "../atoms/icons/svg/StarSVG";
import ForkSVG from "../atoms/icons/svg/ForkSVG";
import "../header/Header.css";

const RepoDetails = ({ tag, value }) => (
  <div className="repo-detail">
    <span className="tagcontainer">
      {tag === "Watch" && <WatchSVG />}
      {tag === "Star" && <StarSVG />}
      {tag === "Fork" && <ForkSVG />}
      <a className="Anchor">{tag}</a>
      <span className="value" />
    </span>
    <span className="value">{value}</span>
  </div>
);
export default RepoDetails;

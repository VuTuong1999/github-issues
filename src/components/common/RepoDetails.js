import React from "react";
import WatchSVG from "../atoms/icons/WatchSVG";
import StarSVG from "../atoms/icons/StarSVG";
import ForkSVG from "../atoms/icons/ForkSVG";
import "../header/Header.css";

const RepoDetails = ({ tag, value }) => (
  <div className="repo-detail">
    <span className="tagcontainer">
      {tag === "Watch" && <WatchSVG />}
      {tag === "Star" && <StarSVG />}
      {tag === "Fork" && <ForkSVG />}
      {tag}
      <a className="anchor-repo"></a>
    </span>
    <span className="value">{value}</span>
  </div>
);
export default RepoDetails;

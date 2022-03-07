import React from "react";
import IssueAll from "../components/issuetable/IssueAll";
import SubNav from "../components/search-subnav/SubNav";
import "./IssueContainer.css";

function IssueContainer() {
  return (
    <div className="issuecontainer">
      <SubNav />
      <div></div>
      <IssueAll />
    </div>
  );
}

export default IssueContainer;

import React from "react";
import IssueTable from "./IssueTable";
import IssueDetail from "./IssueDetail";
import "./IssueTable.css";

function IssueAll() {
  return (
    <div className="All">
      <div className="issueall">
        <IssueTable />
        <IssueDetail />
      </div>
    </div>
  );
}

export default IssueAll;

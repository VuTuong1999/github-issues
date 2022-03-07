import React from "react";
import "./IssueTable.css";

function IssueDetail() {
  return (
    <div className="issuedetail">
      <span className="detail">
        Auther
        <span className="anchor-repo"></span>
      </span>
      <span className="detail">
        Label
        <span className="anchor-repo"></span>
      </span>
      <span className="detail">
        Projects
        <span className="anchor-repo"></span>
      </span>
      <span className="detail">
        Milestones
        <span className="anchor-repo"></span>
      </span>
      <span className="detail">
        Assignee
        <span className="anchor-repo"></span>
      </span>
      <span className="detail">
        Sort
        <span className="anchor-repo"></span>
      </span>
    </div>
  );
}

export default IssueDetail;

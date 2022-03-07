import React from "react";
import SearchSVG from "../atoms/icons/SearchSVG";
import "./SubNav.css";

function SubNav() {
  return (
    <div className="subnav">
      <div className="left">
        <div>
          <div className="filters">
            Filters
            <span className="anchor-repo"></span>
          </div>
          <div className="searchtext">
            <input
              type="text"
              className="styletext"
              value="is:issue is:open"
            ></input>
            <SearchSVG />
          </div>
        </div>

        <div className="labels">
          <a href="https://github.com/facebook/react/labels" className="label">
            {" "}
            labels
          </a>
          <a
            href="https://github.com/facebook/react/milestones"
            className="miles"
          >
            {" "}
            Milestones
          </a>
        </div>
      </div>
      <a
        href="https://github.com/facebook/react/issues/new"
        className="newissue"
      >
        {" "}
        New Issue
      </a>
    </div>
  );
}

export default SubNav;

import React from "react";
import "./IssueTable.css";

function IssueTable() {
  return (
    <div className="table">
      <a
        href="https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue"
        className="open"
      >
        <svg
          color="#fff"
          width="14"
          height="16"
          aria-hidden="true"
          class="sc-bxivhb LTdWi"
        >
          <path
            d="M7 2.3c3.14 0 5.7 2.56 5.7
                    5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3
                    8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14
                    0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1
                    3H6v5h2V4zm0 6H6v2h2v-2z"
          ></path>
        </svg>{" "}
        253 Open
      </a>
      <a
        href="https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue"
        className="closed"
      >
        <svg
          color="#586069"
          width="12"
          height="16"
          aria-hidden="true"
          class="sc-bxivhb GrZDS"
        >
          <path
            fill-rule="evenodd"
            d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
          ></path>
        </svg>{" "}
        5465 Closed
      </a>
    </div>
  );
}
export default IssueTable;

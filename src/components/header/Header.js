import React from "react";
import RepoDetails from "../common/RepoDetails";
import NavigationItem from "./NavigationItem";

function Header() {
  const navigationValues = [
    {
      name: "Code",
      selected: false,
    },
    {
      name: "Issues",
      value: 500,
      selected: true,
    },
    {
      name: "Pull reqests",
      value: 200,
      selected: false,
    },
    {
      name: "Discussions",
      selected: false,
    },
    {
      name: "Actions",
      selected: false,
    },
    {
      name: "Projects",
      value: 10,
      selected: false,
    },
    {
      name: "Insight",
      selected: false,
    },
  ];
  const repodetails = [
    {
      tag: "WatchSVG",
      value: 6665,
      selected: false,
    },
    {
      tag: "Start",
      value: 1515455,
      selected: false,
    },
    {
      tag: "Forks",
      value: 215151,
      selected: false,
    },
  ];
  return (
    <div className="Header">
      <div className="topheader">
        <nav className="headermenus">
          <div className="topheadermenus">
            <div className="fb-react">
              <svg width="12" height="16" aria-hidden="true">
                <path
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0
                    .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1
                    1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                ></path>
              </svg>
              <a
                className="fb"
                href="https://api.github.com/users/facebook"
                color="#0366d6"
              >
                FaceBook
              </a>
              <span>/</span>
              <a
                className="react"
                color="#0366d6"
                fontweight="bold"
                href="https://github.com/facebook/react"
              >
                create-react-app
              </a>
            </div>
            <div className="repo">
              {repodetails.map((item) => (
                <RepoDetails key={item.tag} {...item} />
              ))}
            </div>
            <div className="menusheader" row="second">
              {navigationValues.map((item) => (
                <NavigationItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

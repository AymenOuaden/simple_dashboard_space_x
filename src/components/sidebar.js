import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHelicopterSymbol } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className="container-fluide text-center bg-netcarbon-dark-light">
      <ul className="nav nav-pills flex-column mb-auto ">
        <li className="nav-item ">
          <div className="active mx-0 p-3 btn-hover-sidebar">
            <FontAwesomeIcon
              icon={faDashboard}
              className="text-netcarbon-green"
            ></FontAwesomeIcon>
            <p className="text-light">Dashboard</p>
          </div>
          <div className="mx-0 p-3 btn-hover-sidebar">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-netcarbon-green"
            ></FontAwesomeIcon>
            <p className="text-light">Rockets</p>
          </div>
          <div className="mx-0 p-3 btn-hover-sidebar">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-netcarbon-green"
            ></FontAwesomeIcon>
            <p className="text-light">Launchpads</p>
          </div>
          <div className="mx-0 p-3 btn-hover-sidebar">
            <FontAwesomeIcon
              icon={faHelicopterSymbol}
              className="text-netcarbon-green"
            ></FontAwesomeIcon>
            <p className="text-light">Landpads</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

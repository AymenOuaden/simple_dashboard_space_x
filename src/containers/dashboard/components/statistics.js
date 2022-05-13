import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHelicopterSymbol } from "@fortawesome/free-solid-svg-icons";

export default function Statistics({
  nbRockets,
  nbLaunchpads,
  nbLandpads,
  nbLaunches
}) {
  return (
    <div className="row text-center mx-0">
      <div className="col-3 d-grid gap-2">
        <button className="bg-netcarbon-dark-light border-netcarbon-green p-3 rounded btn-block btn-hover-statistics ">
          <FontAwesomeIcon
            icon={faRocket}
            className="text-netcarbon-green mx-1"
          ></FontAwesomeIcon>
          <span className="mx-1 text-light">{nbRockets}</span>
          <span className="mx-1 text-light">Rockets</span>
        </button>
      </div>
      <div className="col-3 d-grid gap-2">
        <button className="bg-netcarbon-dark-light border-netcarbon-green p-3  rounded btn-block btn-hover-statistics ">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-netcarbon-green mx-1"
          ></FontAwesomeIcon>
          <span className="mx-1 text-light">{nbLaunchpads}</span>
          <span className="mx-1 text-light">Launchpads</span>
        </button>
      </div>{" "}
      <div className="col-3 d-grid gap-2">
        <button className="bg-netcarbon-dark-light border-netcarbon-green p-3  rounded btn-block btn-hover-statistics">
          <FontAwesomeIcon
            icon={faHelicopterSymbol}
            className="text-netcarbon-green mx-1"
          ></FontAwesomeIcon>
          <span className="mx-1 text-light">{nbLandpads}</span>
          <span className="mx-1 text-light ">Landpads</span>
        </button>
      </div>
      <div className="col-3 d-grid gap-2">
        <button className="bg-netcarbon-dark-light border-netcarbon-green p-3  rounded btn-block btn-hover-statistics">
          <FontAwesomeIcon
            icon={faRocket}
            className="text-netcarbon-green mx-1"
          />
          <span className="mx-1 text-light">{nbLaunches}</span>
          <span className="mx-1 text-light ">Launches</span>
        </button>
      </div>
    </div>
  );
}

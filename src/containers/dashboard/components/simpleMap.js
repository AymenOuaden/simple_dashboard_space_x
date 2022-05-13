import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const DisplayLaunchpads = ({ text }) => (
  <div>
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      className=" text-danger fa-3x"
    ></FontAwesomeIcon>
    <h6 className="text-danger">{text}</h6>
  </div>
);

const DisplayLandpads = ({ text }) => (
  <div>
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      className="text-success fa-3x"
    ></FontAwesomeIcon>
    <h6 className="text-success">{text}</h6>
  </div>
);

export default function SimpleMap({ launchpads, landpads }) {
  const defaultProps = {
    center: {
      lat: 28.573469,
      lng: -80.65107
    },
    zoom: 0
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "xxxxxxxxxxxxxxxxxxxxxxxxxxx" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {launchpads.map(launchpad => (
          <DisplayLaunchpads
            lat={launchpad.latitude}
            lng={launchpad.longitude}
            text={launchpad.name}
          />
        ))}
        {landpads.map(landpad => (
          <DisplayLandpads
            lat={landpad.latitude}
            lng={landpad.longitude}
            text={landpad.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

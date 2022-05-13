import React from "react";
import netCarbon from "../assets/images/netCarbon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="container-fluide py-2 header-light">
      <div className="row text-center mx-0">
        <div className="col-lg-2 col-md-2 col-sm-2 text-start">
          <a href="/" className="text-decoration-none text-center">
            <img src={netCarbon} alt=" logo" width={50}></img>
            <span className="text-light ">Net-X</span>
          </a>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 ">
          {" "}
          <div className="form-group ">
            <div className="input-group border border-secondary rounded-pill px-3 py-1">
              <input
                className="border-0 p-0 bg-transparent form-control"
                placeholder="Search ...."
                name="search"
                type="text"
              />
              <div className="p-1">
                <a href="/">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-netcarbon-green "
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 d-flex justify-content-end pe-5">
          <div className="row align-items-center ">
            <div className="col">
              <FontAwesomeIcon
                icon={faBell}
                className="text-netcarbon-green fa-2x"
              ></FontAwesomeIcon>
            </div>
            <div className="col">
              <FontAwesomeIcon
                icon={faUser}
                className="text-netcarbon-green fa-2x"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

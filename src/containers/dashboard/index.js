import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sidebar";
import Statistics from "./components/statistics";
import Launchpads from "./components/launchpads";
import Landpads from "./components/landpads";
import Rockets from "./components/rockets";
import Launches from "./components/launches";
import SimpleMap from "./components/simpleMap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rockets: [], launchpads: [], landpads: [], launches: [] };
  }
  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then(response => response.json())
      .then(launchpads => this.setState({ launchpads: launchpads }));
    fetch("https://api.spacexdata.com/v4/landpads")
      .then(response => response.json())
      .then(landpads => this.setState({ landpads: landpads }));
    fetch("https://api.spacexdata.com/v4/rockets")
      .then(response => response.json())
      .then(rockets => this.setState({ rockets: rockets }));
    fetch("https://api.spacexdata.com/v4/launches")
      .then(response => response.json())
      .then(launches => this.setState({ launches: launches }));
  }

  render() {
    return (
      <div>
        <div className="border border-0">
          <Header />
        </div>
        <div className="container-fluide">
          <div className="row border-0 mx-0">
            <div className="col-lg-1 col-md-2 col-sm-2 px-0 mt-0 shadow mb-5 rounded ">
              <SideBar />
            </div>

            <div className="col-lg-11 col-md-10 col-sm-10">
              <div className="row mt-3 mx-0">
                <Statistics
                  nbRockets={this.state.rockets.length}
                  nbLaunchpads={this.state.launchpads.length}
                  nbLandpads={this.state.landpads.length}
                  nbLaunches={this.state.launches.length}
                />
              </div>
              <div className="row mx-0 my-3 p-2">
                <p className="text-light">Launchpads and Landpads on the map</p>
                {
                  <SimpleMap
                    key="0"
                    launchpads={this.state.launchpads}
                    landpads={this.state.landpads}
                  />
                }
              </div>
              <div className="row mx-0 my-2 active p-2">
                <p className="text-light">Some landpads and launchpads</p>

                <div className="col-6 div-dash">
                  {" "}
                  <Landpads
                    limite={3}
                    lenght={this.state.landpads.lenght}
                    landpads={this.state.landpads}
                  />
                </div>
                <div className="col-6 div-dash">
                  {" "}
                  <Launchpads
                    limite={3}
                    lenght={this.state.launchpads.lenght}
                    launchpads={this.state.launchpads}
                  />
                </div>
              </div>

              <div className="row mx-0 active my-2 p-2">
                <p className="text-light">Some launches</p>

                <div className="col-6 div-dash-x2">
                  {" "}
                  <Launches
                    limite={4}
                    lenght={this.state.launches.lenght}
                    launches={this.state.launches}
                  />
                </div>
                <div className="col-6 div-dash-x2">
                  <iframe
                    title="launch"
                    width="640"
                    height="480"
                    src="https://www.youtube.com/embed/1MkcWK2PnsU"
                  ></iframe>
                </div>
              </div>
              <div className="row mx-0 my-2 active p-2">
                <p className="text-light">Some rockets</p>
                <Rockets
                  limite={4}
                  lenght={this.state.rockets.lenght}
                  rockets={this.state.rockets}
                  launches={this.state.launches}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Dashboard;

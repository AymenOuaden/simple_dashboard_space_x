import React from "react";

class Launches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limiteD: this.props.limite,
      length: this.props.lenght
    };
  }
  defineNoLimite = event => {
    this.setState({ limiteD: this.state.length });

    this.forceUpdate();
  };
  render() {
    return (
      <div className="shadow bg-dark text-light rounded mt-4 pt-3">
        <p className="text-center">Launches </p>
        <div className="row mx-0">
          <div className="table-responsive">
            {" "}
            <table className="table">
              <thead>
                <tr className="text-netcarbon-green">
                  <th className="col">Flight number</th>
                  <th className="col">Rocket</th>
                  <th className="col">Launchpad</th>
                  <th className="col">Date</th>
                  <th className="col">Success</th>
                  <th className="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-light">
                {this.props.launches
                  .slice(0, this.state.limiteD)
                  .map(launch => (
                    <tr>
                      <td className="col"> {launch.flight_number}</td>
                      <td className="col"> {launch.rocket}</td>
                      <td className="col"> {launch.launchpad}</td>
                      <td className="col"> {launch.date_utc}</td>
                      <td className="col"> {JSON.stringify(launch.success)}</td>

                      <td className="col">
                        {" "}
                        <button className="bg-transparent border-0 text-netcarbon-green">
                          {" "}
                          Details
                        </button>{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="text-center mb-3">
              <button
                className="bg-outline-netCarbon-green p-2 rounded"
                onClick={this.defineNoLimite}
              >
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Launches;

import React from "react";

class Landpads extends React.Component {
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
        <p className="text-center">Landpads</p>
        <div className="row mx-0">
          <div className="table-responsive">
            {" "}
            <table className="table">
              <thead>
                <tr className="text-netcarbon-green">
                  <th className="col">Name</th>
                  <th className="col">Type</th>
                  <th className="col">locality</th>
                  <th className="col">launch attempts</th>
                  <th className="col">launch successes</th>
                  <th className="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-light">
                {" "}
                {this.props.landpads
                  .slice(0, this.state.limiteD)
                  .map(landpad => (
                    <tr>
                      <td className="col"> {landpad.name}</td>
                      <td className="col"> {landpad.type}</td>
                      <td className="col"> {landpad.locality}</td>
                      <td className="col"> {landpad.landing_attempts}</td>
                      <td className="col"> {landpad.landing_successes}</td>
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
export default Landpads;

import React from "react";

class Launchpads extends React.Component {
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
        <p className="text-center">launchpads</p>
        <div className="row mx-0">
          <div className="table-responsive">
            {" "}
            <table className="table">
              <thead>
                <tr className="text-netcarbon-green">
                  <th className="col">Name</th>
                  <th className="col">locality</th>
                  <th className="col">locality</th>
                  <th className="col">launch attempts</th>
                  <th className="col">launch successes</th>
                  <th className="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-light">
                {" "}
                {this.props.launchpads
                  .slice(0, this.state.limiteD)
                  .map(launchpad => (
                    <tr>
                      <td className="col"> {launchpad.name}</td>
                      <td className="col"> {launchpad.locality}</td>
                      <td className="col"> {launchpad.region}</td>
                      <td className="col"> {launchpad.launch_attempts}</td>
                      <td className="col"> {launchpad.launch_attempts}</td>
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
export default Launchpads;

import React from "react";

class ListRockets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nbLaunche: 0,
      limiteD: this.props.limite,
      length: this.props.lenght
    };
  }
  defineNoLimite = event => {
    this.setState({ limiteD: this.state.length });
  };
  render() {
    return (
      <div className="shadow bg-netcarbon-dark-light text-light rounded mt-4 pt-3">
        <p className="text-center">rockets </p>
        <div className="row mx-0">
          <div className="table-responsive">
            {" "}
            <table className="table">
              <thead>
                <tr className="text-netcarbon-green">
                  <th className="col">Name</th>
                  <th className="col">Type</th>
                  <th className="col">Country</th>
                  <th className="col">Hight</th>
                  <th className="col">Number of lunches</th>
                  <th className="col">Description</th>
                </tr>
              </thead>
              <tbody className="text-light">
                {this.props.rockets.slice(0, this.state.limiteD).map(rocket => (
                  <tr>
                    <td className="col"> {rocket.name}</td>
                    <td className="col"> {rocket.type}</td>
                    <td className="col"> {rocket.country}</td>
                    <td className="col"> {rocket.height.meters}</td>
                    <td className="col">
                      {" "}
                      {this.props.launches.forEach(element => {
                        if (element.rocket === rocket.id)
                          this.state.nbLaunche++;
                      })}
                      {this.state.nbLaunche}
                      <p className="d-none">{(this.state.nbLaunche = 0)}</p>
                    </td>
                    <td className="col"> {rocket.description}</td>
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
export default ListRockets;

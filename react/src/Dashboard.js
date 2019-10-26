import React, { Component } from "react";

export default class FloorPlan extends Component {
  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Current No. of Vistors</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title" id="vistorsNo">
                  1984
                </h2>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69"></i> Just
                  Updated
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">No. of Incidents</h4>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="barChartSimpleGradientsNumbers"></canvas>
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm"></i> Last 12 hours
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title"> Robots Status</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Cleaning</td>
                        <td>Stand By</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>First Aid</td>
                        <td>On the road</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Incidents logs</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Time</th>
                        <th>Incidents</th>
                        <th className="text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>42</td>
                        <td>19:30</td>
                        <td>Falling Over</td>
                        <td className="text-right">Solved</td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>18:55</td>
                        <td>Dog Detected</td>
                        <td className="text-right">Solved</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>18:27</td>
                        <td>Smoking</td>
                        <td className="text-right">Solved</td>
                      </tr>
                      <tr>
                        <td>39</td>
                        <td>17:52</td>
                        <td>Conflict</td>
                        <td className="text-right">Solved</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>17:20</td>
                        <td>Rubbish bin #5 almost full</td>
                        <td className="text-right">Solved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

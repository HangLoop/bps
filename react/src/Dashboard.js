import React, { Component, useState } from "react";
import Chart from "chart.js";

export default class FloorPlan extends Component {
  render() {
    return (
      <>
        <div className="panel-header panel-header-lg">
          <canvas id="bigDashboardChart"></canvas>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Current No. of Vistors</h4>
                </div>
                <div className="card-body">
                  <NumberOfVisitors />
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
                    <i className="now-ui-icons ui-2_time-alarm"></i> Last 12
                    hours
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
      </>
    );
  }

  componentDidMount() {
    this.initDashboardPageCharts();
  }

  initDashboardPageCharts = () => {
    let chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    let gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ],
        xAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    let gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: 0,
            gridLines: {
              zeroLineColor: "transparent",
              drawBorder: false
            }
          }
        ],
        xAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    var ctx = document.getElementById("bigDashboardChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00"
        ],
        datasets: [
          {
            label: "Data",
            borderColor: chartColor,
            pointBorderColor: chartColor,
            pointBackgroundColor: "#1e3d60",
            pointHoverBackgroundColor: "#1e3d60",
            pointHoverBorderColor: chartColor,
            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [
              500,
              1500,
              1000,
              1900,
              1300,
              900,
              1500,
              1600,
              1200,
              1400,
              1900,
              2500
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "No. of Vistors",
          fontColor: "#fff"
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
          }
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        legend: {
          position: "bottom",
          fillStyle: "#FFF",
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                drawTicks: true,
                drawBorder: false,
                display: true,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent"
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: "transparent",
                display: false
              },
              ticks: {
                padding: 10,
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold"
              }
            }
          ]
        }
      }
    });

    var cardStatsMiniLineColor = "#fff",
      cardStatsMiniDotColor = "#fff";

    var e = document
      .getElementById("barChartSimpleGradientsNumbers")
      .getContext("2d");

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(255, 167, 44, 0)");
    gradientFill.addColorStop(1, hexToRGB("#FFA72C", 0.6));

    var a = {
      type: "bar",
      data: {
        labels: [
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00"
        ],
        datasets: [
          {
            label: "No. of Incidents",
            backgroundColor: gradientFill,
            borderColor: "#FFA72C",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#FFA72C",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 1,
            data: [0, 2, 1, 4, 6, 0, 3, 7, 5, 4, 2, 8]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              gridLines: 0,
              gridLines: {
                zeroLineColor: "transparent",
                drawBorder: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: 0,
              ticks: {
                display: true
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }
          ]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 15,
            bottom: 15
          }
        }
      }
    };

    var viewsChart = new Chart(e, a);
  };
}

class NumberOfVisitors extends React.Component {
  state = {
    count: getRandomArbitrary(1900, 2100)
  };

  render() {
    return (
      <h2 className="card-title" id="vistorsNo">
        {this.state.count}
      </h2>
    );
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ count: getRandomArbitrary(1900, 2100) });
    }, 1500);
  }
}

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

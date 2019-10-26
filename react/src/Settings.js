import React, { Component } from 'react';
import * as $ from 'jquery';

export default class FloorPlan extends Component {
  componentDidMount() {
    $("button[type='button']").click(function() {
      if ($(this).hasClass('disabledButton')) {
        $(this).removeClass('disabledButton');
      } else {
        $(this).addClass('disabledButton');
      }
    });
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="card  card-tasks">
              <div className="card-header ">
                <h4 className="card-title">Monitoring Options</h4>
              </div>
              <div className="card-body ">
                <div className="table-full-width table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                        <th>
                            Enable
                        </th>
                        <th>
                            Event/Object
                        </th>
                        <th className="text-right">
                            Options
                        </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" checked />
                              <span className="form-check-sign"></span>
                            </label>
                          </div>
                        </td>
                        <td className="text-left">Animal</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-success btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                            <i className="fas fa-robot"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                            <i className="now-ui-icons health_ambulance"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini" data-original-title="Remove">
                            <i className="now-ui-icons sport_user-run"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" />
                              <span className="form-check-sign"></span>
                            </label>
                          </div>
                        </td>
                        <td className="text-left">Rubbis Bin</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-success btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                            <i className="fas fa-robot"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                            <i className="now-ui-icons health_ambulance"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini" data-original-title="Remove">
                            <i className="now-ui-icons sport_user-run"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" checked />
                              <span className="form-check-sign"></span>
                            </label>
                          </div>
                        </td>
                        <td className="text-left">Fall over
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-success btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                            <i className="fas fa-robot"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                            <i className="now-ui-icons health_ambulance"></i>
                          </button>
                          <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini" data-original-title="Remove">
                            <i className="now-ui-icons sport_user-run"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" checked />
                                <span className="form-check-sign"></span>
                              </label>
                            </div>
                          </td>
                          <td className="text-left">Heart Attack</td>
                          <td className="td-actions text-right">
                            <button type="button" rel="tooltip" title="" className="btn btn-success btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                              <i className="fas fa-robot"></i>
                            </button>
                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                              <i className="now-ui-icons health_ambulance"></i>
                            </button>
                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini" data-original-title="Remove">
                              <i className="now-ui-icons sport_user-run"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" checked />
                                <span className="form-check-sign"></span>
                              </label>
                            </div>
                          </td>
                          <td className="text-left">Spilling</td>
                          <td className="td-actions text-right">
                            <button type="button" rel="tooltip" title="" className="btn btn-success btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                              <i className="fas fa-robot"></i>
                            </button>
                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                              <i className="now-ui-icons health_ambulance"></i>
                            </button>
                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini" data-original-title="Remove">
                              <i className="now-ui-icons sport_user-run"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" checked />
                                <span className="form-check-sign"></span>
                              </label>
                            </div>
                          </td>
                          <td className="text-left">Conflict</td>
                          <td className="td-actions text-right">
                            <button type="button" rel="tooltip" title="" className="btn btn-success btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                              <i className="fas fa-robot"></i>
                            </button>
                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                              <i className="now-ui-icons health_ambulance"></i>
                            </button>
                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini" data-original-title="Remove">
                              <i className="now-ui-icons sport_user-run"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" checked />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td className="text-left">Smoking</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-success btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                                <i className="fas fa-robot"></i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini" data-original-title="Edit Task">
                                <i className="now-ui-icons health_ambulance"></i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini" data-original-title="Remove">
                                <i className="now-ui-icons sport_user-run"></i>
                              </button>
                            </td>
                          </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

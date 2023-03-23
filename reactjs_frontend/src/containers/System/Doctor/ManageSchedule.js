import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';

class ManageSchedule extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Doctor-container">
          chào đón ManageSchedule
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    DoctorMenuPath: state.app.DoctorMenuPath,
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);

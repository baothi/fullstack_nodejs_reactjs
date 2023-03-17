import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeFooter extends Component {

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
  }


  render() {

    return (
      <div className="home-footer">
        <p>&copy; 2023 RapidTables.com</p>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

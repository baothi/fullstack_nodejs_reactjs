import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

  render() {

    return (
      <React.Fragment>
        <div className='home-header-container'>
          <div className='home-header-content'>
            <div className='left-content'>
              <i className="fas fa-bars"></i>
              <img className='header-logo' src={logo} />
            </div>
            <div className='center-content'>
              <div className="child-content">
                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                <div><FormattedMessage id="home-header.search-doctor" /></div>
              </div>
              <div className="child-content">
                <div><b><FormattedMessage id="home-header.health-facility" /></b></div>
                <div><FormattedMessage id="home-header.select-room" /></div>
              </div>
              <div className="child-content">
                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                <div><FormattedMessage id="home-header.select-doctor" /></div>
              </div>
              <div className="child-content">
                <div><b><FormattedMessage id="home-header.fee" /></b></div>
                <div><FormattedMessage id="home-header.health-check" /></div>
              </div>
            </div>
            <div className='right-content'>
              <div className="support"><i className="far fa-question-circle"></i><FormattedMessage id="home-header.support" /></div>
              <div className='language-en active'>EN</div>
              <div className='language-vi'>VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className='title1'><FormattedMessage id="banner.medical-background" /></div>
            <div className='title2'><FormattedMessage id="banner.comprehensive-health-care" /></div>
            <div className='search'>
              <i className="fas fa-search"></i>
              <input type="search" placeholder='Tìm gói khám' />
            </div>
          </div>
          <div className="content-down">
            <div className='options'>
              <div className='option-child'>
                <div className='icon-child'><i className="fas fa-hospital"></i></div>
                <div className='text-child'><FormattedMessage id="banner.specialist-examination" /></div>
              </div>
              <div className='option-child'>
                <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                <div className='text-child'><FormattedMessage id="banner.remote-examination" /></div>
              </div>
              <div className='option-child'>
                <div className='icon-child'><i className="fas fa-procedures"></i></div>
                <div className='text-child'><FormattedMessage id="banner.general-examination" /></div>
              </div>
              <div className='option-child'>
                <div className='icon-child'><i className="fas fa-flask"></i></div>
                <div className='text-child'><FormattedMessage id="banner.medical-test" /></div>
              </div>
              <div className='option-child'>
                <div className='icon-child'><i className="fas fa-user-shield"></i></div>
                <div className='text-child'><FormattedMessage id="banner.mental-health" /></div>
              </div>
              <div className='option-child'>
                <div className='icon-child'><i className="fas fa-briefcase-medical"></i></div>
                <div className='text-child'><FormattedMessage id="banner.dental-examination" /></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.user.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

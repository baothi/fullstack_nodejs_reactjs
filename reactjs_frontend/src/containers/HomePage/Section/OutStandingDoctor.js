import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss'
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';


class OutStandingDoctor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrDoctors: [],
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorsRedux
      })
    }
  }

  componentDidMount() {
    this.props.loadTopDoctors();
  }
  render() {
    let arrDoctors = this.state.arrDoctors
    let language = this.props.language;
    // arrDoctors = arrDoctors.concat(arrDoctors)
    // console.log("==========   :  ", this.state);
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section"><FormattedMessage id="homepage.out-standing-doctor" /></span>
            <button className="btn-section"><FormattedMessage id="homepage.more-infor" /></button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>

              {arrDoctors && arrDoctors.length > 0 &&
                arrDoctors.map((item, index) => {
                  let imageBase64 = '';
                  if (item.image) {
                    // const imageBuffer = Buffer.from(JSON.stringify(user.image))
                    // imageBase64 = `data:image/png;base64,${imageBuffer.toString('base64')}`
                    imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                  }
                  let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                  let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                  return (
                    <div className="section-customize">
                      <div className='customize-border'>
                        <div className="outer-bg">
                          <div className="bg-image section-outstanding-doctor"
                            style={{ backgroundImage: `url(${imageBase64})` }}
                          />
                        </div>
                        <div className="position text-center">
                          <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                          <div>Cơ Xương Khớp 1</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    topDoctorsRedux: state.admin.topDoctors,
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);

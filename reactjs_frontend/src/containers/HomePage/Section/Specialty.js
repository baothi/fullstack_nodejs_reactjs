import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class Specialty extends Component {

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
  }


  render() {

    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên Khoa Phổ Biến</span>
            <button className="btn-section">Xem Thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cơ Xương Khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Thần Kinh</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Châm Cứu</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cột Sống</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Da Liễu</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Siêu Âm</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Tai Mũi Họng</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Sản Phụ Khoa</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Tiêu Hóa</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Tim Mạch</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Y Học Cổ Truyền</div>
              </div>
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
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

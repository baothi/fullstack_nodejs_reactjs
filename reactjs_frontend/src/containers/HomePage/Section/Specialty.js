import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

import coxuongkhopImg from "../../../assets/specialty/co-xuong-khop.jpg";
import thankinhImg from "../../../assets/specialty/than-kinh.jpg";
import chamcuuImg from "../../../assets/specialty/cham-cuu.jpg";
import cotsongImg from "../../../assets/specialty/cot-song.jpg";
import dalieuImg from "../../../assets/specialty/da-lieu.jpg";
import sanphukhoaImg from "../../../assets/specialty/san-phu-khoa.jpg";
import sieuamImg from "../../../assets/specialty/san-phu-khoa.jpg";
import taimuihongImg from "../../../assets/specialty/tai-mui-hong.jpg";
import tieuhoaImg from "../../../assets/specialty/tieu-hoa.jpg";
import timmachImg from "../../../assets/specialty/tim-mach.jpg";
import yhoccotruyenImg from "../../../assets/specialty/y-hoc-co-truyen.jpg";


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

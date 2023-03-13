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


class HandBook extends Component {

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
  }


  render() {

    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cẩm Nang</span>
            <button className="btn-section">Xem Thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cơ Xương Khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Thần Kinh</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Châm Cứu</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cột Sống</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Da Liễu</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Siêu Âm</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Tai Mũi Họng</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Sản Phụ Khoa</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Tiêu Hóa</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Tim Mạch</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);

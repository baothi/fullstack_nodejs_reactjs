import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MediacalFacility.scss'
import Slider from "react-slick";


class MediacalFacility extends Component {

  render() {

    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ Sở Y Tế Nổi Bật</span>
            <button className="btn-section">Xem Thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Bệnh viện Hữu nghị Việt Đức</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Bệnh viện Chợ Rẫy</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Phòng khám Bệnh viện Đại học Y Dược 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Bệnh viện Ung bướu Hưng Việt</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống y tế MEDLATEC</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Trung tâm xét nghiệm Diag Laboratories</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Hệ thống Y tế Thu Cúc TCI</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Bệnh viện Nam học và Hiếm muộn Hà Nội</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Bệnh viện Đa khoa Hồng Phát</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Bệnh viện Y học cổ truyền Trung ương</div>
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
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MediacalFacility);

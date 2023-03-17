import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'

class About extends Component {

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
  }


  render() {

    return (
      <div className="section-share section-about">
        <div className="section-about-header">Truyền thông nói về BookingCare</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe width="100%" height="400px"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>

            </iframe>
          </div>
          <div className="content-right">
            {/* <ul>
              <li>
                <a target="_blank" title="Báo sức khỏe đời sống nói về BookingCare" href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-n153232.html">
                  <i class="truyenthong-bt truyenthong-suckhoedoisong luoi-tai" style="background-image: url(&quot;/assets/truyenthong/suckhoedoisong.png&quot;);" data-src="/assets/truyenthong/suckhoedoisong.png"></i>
                </a>
              </li>
              <li>
                <a target="_blank" title="VTV1 - Cà phê khởi nghiệp 14-11-2018" href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm">
                  <i class="truyenthong-bt truyenthong-vtv1 luoi-tai" style="background-image: url(&quot;/assets/truyenthong/vtv1.png&quot;);" data-src="/assets/truyenthong/vtv1.png"></i>
                </a>
              </li>
              <li>
                <a target="_blank" title="Báo điện tử ictnews giới thiệu BookingCare" href="https://ictnews.vn/kinh-doanh/doanh-nghiep/startup-bookingcare-chinh-thuc-ra-mat-phien-ban-di-dong-cua-nen-tang-ho-tro-dat-lich-kham-online-173512.ict">
                  <i class="truyenthong-bt truyenthong-ictnews luoi-tai" style="background-image: url(&quot;/assets/truyenthong/ictnews.png&quot;);" data-src="/assets/truyenthong/ictnews.png"></i>
                </a>
              </li>
              <li><a target="_blank" title="VnExpress nói về BookingCare" href="https://video.vnexpress.net/tin-tuc/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html">
                <i class="truyenthong-bt truyenthong-vnexpress luoi-tai" style="background-image: url(&quot;/assets/truyenthong/vnexpress.png&quot;);" data-src="/assets/truyenthong/vnexpress.png"></i>
              </a>
              </li>
              <li><a target="_blank" title="VTC News nói về BookingCare" href="https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-d434101.html">
                <i class="truyenthong-bt truyenthong-vtcnews luoi-tai" style="background-image: url(&quot;/assets/truyenthong/vtcnews.png&quot;);" data-src="/assets/truyenthong/vtcnews.png"></i>
              </a>
              </li>
              <li>
                <a target="_blank" title="Cục công nghệ thông tin - Bộ Y tế nói về BookingCare" href="http://ehealth.gov.vn/?action=News&amp;newsId=46094">
                  <i class="truyenthong-bt truyenthong-cnntbyt luoi-tai" style="background-image: url(&quot;/assets/truyenthong/cuc-cong-nghe-thong-tin-bo-y-te-2.png&quot;);" data-src="/assets/truyenthong/cuc-cong-nghe-thong-tin-bo-y-te-2.png"></i>
                </a>
              </li>
              <li>
                <a target="_blank" title="Báo điện tử infonet nói về BookingCare" href="https://infonet.vietnamnet.vn/khoe-dep/da-co-hon-20-000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html">
                  <i class="truyenthong-bt truyenthong-infonet luoi-tai" style="background-image: url(&quot;/assets/truyenthong/infonet.png&quot;);" data-src="/assets/truyenthong/infonet.png"></i>
                </a>
              </li>
              <li>
                <a target="_blank" title="VTV1 - Cà phê khởi nghiệp 16-08-2018" href="https://vtv.vn/video/ca-phe-khoi-nghiep-16-8-2018-317687.htm">
                  <i class="truyenthong-bt truyenthong-vtv1 luoi-tai" style="background-image: url(&quot;/assets/truyenthong/vtv1.png&quot;);" data-src="/assets/truyenthong/vtv1.png">
                  </i>
                </a>
              </li>
              <li><a target="_blank" title="VTC Go nói về BookingCare" href="https://www.youtube.com/watch?v=mstAc81lpMc">
                <i class="truyenthong-bt truyenthong-vtcgo luoi-tai" style="background-image: url(&quot;/assets/truyenthong/vtcgo.png&quot;);" data-src="/assets/truyenthong/vtcgo.png"></i>
              </a></li>
              <li><a target="_blank" title="VTV1 - Cà phê khởi nghiệp 21-02-2018" href="https://vtv.vn/video/ca-phe-khoi-nghiep-21-02-2018-282723.htm">
                <i class="truyenthong-bt truyenthong-vtv1 luoi-tai" style="background-image: url(&quot;/assets/truyenthong/vtv1.png&quot;);" data-src="/assets/truyenthong/vtv1.png"></i>
              </a>
              </li>
            </ul> */}
            <p>CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

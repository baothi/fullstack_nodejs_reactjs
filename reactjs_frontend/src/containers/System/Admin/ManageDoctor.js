import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./ManageDoctor.scss";
import * as actions from '../../../store/actions';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { LANGUAGES } from '../../../utils';
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);




// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: '',
      contentHTML: '',
      selectedOption: '',
      description: '',
      listDoctors: [],
    };
  }

  async componentDidMount() {
    this.props.fetchALLDoctors();
  }

  builDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      })

    }
    return result;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.builDataInputSelect(this.props.allDoctors)
      this.setState({
        listDoctors: dataSelect,
      })
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.builDataInputSelect(this.props.allDoctors)
      this.setState({
        listDoctors: dataSelect,
      })
    }
  }

  handleDeleteUser = (user) => {
  };

  // Finish!
  handleEditorChange = ({ html, text }) => {
    // console.log('handleEditorChange', html, text);
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    })
  }

  handleSaveContentMarkdown = () => {
    this.props.createInforDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedOption.value
    })
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleOnChangeDesc = (event) => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    // console.log('render all doctors : ', this.state);
    return (
      <div className='manage-doctor-container'>
        <div className='manage-doctor-title'>Tạo Thêm Thông Tin DocTor</div>
        <div className='more-infor'>
          <div className='content-left from-group'>
            <label>Chọn bác sĩ</label>
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={this.state.listDoctors}
            />
          </div>
          <div className='content-right from-group'>
            <label>Thông Tin Giới Thiệu</label>
            <textarea className='form-control' rows="4"
              onChange={(event) => this.handleOnChangeDesc(event)}
              value={this.state.description}
            >bác sĩ good</textarea>
          </div>
        </div>
        <div className='manage-doctor-editor'>
          <MdEditor
            style={{ height: '500px' }}
            renderHTML={text => mdParser.render(text)}
            onChange={this.handleEditorChange} />
        </div>
        <button className="save-content-doctor" onClick={() => this.handleSaveContentMarkdown()} >
          Lưu Thông Tin
        </button>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchALLDoctors: () => dispatch(actions.fetchALLDoctors()),
    createInforDoctor: (data) => dispatch(actions.CreateInforDoctor(data)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);

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
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

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
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
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
    console.log('handleSaveContentMarkdown : ', this.state);
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
    return (
      <div className='manage-doctor-container'>
        <div className='manage-doctor-title'>Tạo Thêm Thông Tin DocTor</div>
        <div className='more-infor'>
          <div className='content-left from-group'>
            <label>Chọn bác sĩ</label>
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={options}
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
    listUsers: state.admin.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
    deleteUserRedux: (id) => dispatch(actions.deleteAUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);

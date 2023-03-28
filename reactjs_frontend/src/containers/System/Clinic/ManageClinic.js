import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import "./ManageClinic.scss";
import MarkdownIt from 'markdown-it';
import MdEdittor from "react-markdown-editor-lite";
import { CommonUtils } from "../../../utils";
import { createNewClinic } from "../../../services/userService";
import { toast } from 'react-toastify';

const mdParser = new MarkdownIt(/*Markdown it options*/)

class ManageClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      imageBase64: '',
      descriptionHTML: '',
      descriptionMarkdown: '',
    }
  }

  async componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.language !== this.props.language) {
    }
  }

  handleOnChangeInput = (event, id) => {
    let stateCopy = { ...this.state };
    stateCopy[id] = event.target.value;
    this.setState({
      ...stateCopy
    })
  };

  handleEditorChange = ({ html, text }) => {
    this.setState({
      descriptionHTML: html,
      descriptionMarkdown: text,
    })
  }

  handleOnchangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      this.setState({
        imageBase64: base64
      })
    }
  }

  handleSaveNewClinic = async () => {
    let res = await createNewClinic(this.state);
    if (res && res.errCode === 0) {
      toast.success("Add new specialty succeeded!")
      this.setState({
        name: '',
        imageBase64: '',
        address: '',
        descriptionHTML: '',
        descriptionMarkdown: '',
      })
    } else {
      toast.error("something wrongs ...");
      console.log(">>> Something wrongs : ", res)
    }
  }

  render() {
    return (
      <div className='manage-specialty-container'>
        <div className='ms-title'>Quản Lý Phòng Khám</div>
        <div className="add-new-specialty row">
          <div className="col-6 form-group">
            <label>Tên Phòng Khám</label>
            <input className='form-control' placeholder="" type='text' value={this.state.name}
              onChange={(event) => this.handleOnChangeInput(event, 'name')} />
          </div>
          <div className="col-6 form-group">
            <label>Ảnh Phòng Khám</label>
            <input className='form-control-file' placeholder="" type='file'
              onChange={(event) => this.handleOnchangeImage(event)} />
          </div>
          <div className="col-6 form-group">
            <label>Địa chỉ Phòng Khám</label>
            <input className='form-control' placeholder="" type='text' value={this.state.address}
              onChange={(event) => this.handleOnChangeInput(event, 'address')} />
          </div>
          <div className='col-12'>
            <MdEdittor
              style={{ height: '500px' }}
              renderHTML={text => mdParser.render(text)}
              onChange={this.handleEditorChange}
              value={this.state.descriptionMarkdown}
            />
          </div>
          <div className='col-12'>
            <button className='btn-save-specialty' onClick={() => this.handleSaveNewClinic()}>save</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);

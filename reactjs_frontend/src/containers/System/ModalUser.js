import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      address: '',
      phonenumber: '',
      // gender: '',
      // roleId: '',
    };
  }
  componentDidMount() {
  }
  toggle = () => {
    this.props.toggleFormParent();
  };

  handleOnChangeInput = (event, id) => {
    // console.log(event.target.value, id)
    //bad code here
    // this.setState[id] = event.target.value;
    // this.setState({
    //   ...this.state
    // }, () => {
    //   console.log("check bad state", this.state);
    // })
    // good code here
    let copyState = { ...this.state }
    copyState[id] = event.target.value;
    this.setState({ ...copyState })


  };

  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address", "phonenumber"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter : " + arrInput[i]);
        break;
      }
    }
    return isValid
  };

  handleAddNewUser = () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      this.props.createNewUser(this.state);
    }

  }


  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => { this.toggle() }}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => { this.toggle() }}>Create A New User</ModalHeader>
        <ModalBody>
          <div className='modal-user-body'>
            <div className="input-container">
              <label>Email</label>
              <input type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                value={this.state.email}
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type='Password'
                onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                value={this.state.password}
              />
            </div>
            <div className="input-container">
              <label>First Name</label>
              <input type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-with-input">
              <label>Address</label>
              <input type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                value={this.state.address}
              />
            </div>
            <div className="input-container max-with-input">
              <label>Phone Number</label>
              <input type='text'
                onChange={(event) => { this.handleOnChangeInput(event, "phonenumber") }}
                value={this.state.phonenumber}
              />
            </div>
            {/* <div className="input-container">
              <label>Sex</label>
              <select id="gender" class="form-select" name="gender">
                <option value="1" selected>Female</option>
                <option value="0">Male</option>
              </select>
            </div>
            <div className="input-container">
              <label>Role</label>
              <select id="roleId" class="form-select" name="roleId">
                <option value="0" selected>Admin</option>
                <option value="1">Doctor</option>
                <option value="2">Patient</option>
              </select>
            </div> */}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className='px-3'
            onClick={() => { this.handleAddNewUser() }}>
            Save Change</Button>{' '}
          <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);




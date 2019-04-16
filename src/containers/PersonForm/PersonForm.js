import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { Actions } from '../../constants';
import './PersonForm.scss';
import TextInput from '../../components/TextInput';

class PersonForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    };

    this.firstNameInputRef = React.createRef();
    this.lastNameInputRef = React.createRef();
    this.phoneInputRef = React.createRef();
    this.emailInputRef = React.createRef();
  }

  onFirstNameChange(evt) {
    this.props.setFirstName(evt.target.value);
  }

  onLastNameChange(evt) {
    this.props.setLastName(evt.target.value);
  }

  onPhoneChange(evt) {
    this.props.setPhone(evt.target.value);
  }

  onEmailChange(evt) {
    this.props.setEmail(evt.target.value);
  }

  onNextClick(evt) {
    let firstNameChecked = this.firstNameInputRef.current.checkError(),
        lastNameChecked = this.lastNameInputRef.current.checkError(),
        phoneChecked = this.phoneInputRef.current.checkError(),
        emailChecked = this.emailInputRef.current.checkError();
    if ( firstNameChecked
        && lastNameChecked
        && phoneChecked
        && emailChecked ) {
          this.props.nextStep();
        }
  }

  render() {
    return (
      <div className="PersonForm">
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextInput
              label="Имя"
              placeholder="Иван"
              onChange={this.onFirstNameChange.bind(this)}
              required={true}
              ref={this.firstNameInputRef}
            ></TextInput>
            {this.props.firstName}
          </Grid>
          <Grid item xs={6}>
            <TextInput
              label="Фамилия"
              placeholder="Иванов"
              onChange={this.onLastNameChange.bind(this)}
              required={true}
              ref={this.lastNameInputRef}
            ></TextInput>
          </Grid>
          <Grid item xs={12}>
            <TextInput
              label="Телефон"
              placeholder="+79046524783"
              onChange={this.onPhoneChange.bind(this)}
              required={true}
              ref={this.phoneInputRef}
            ></TextInput>
          </Grid>
          <Grid item xs={12}>
            <TextInput
              label="Email"
              placeholder="example@example.com"
              onChange={this.onEmailChange.bind(this)}
              required={true}
              ref={this.emailInputRef}
            ></TextInput>
          </Grid>
        </Grid>
        <Grid item xs={12} className="btn-section">
          <Button 
            variant="contained" 
            color="primary"
            onClick={this.onNextClick.bind(this)}>
            Продолжить
          </Button>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.user
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstName: (firstName) => {
      dispatch({ type: Actions.SET_FIRST_NAME, payload: { firstName } })
    },
    setLastName: (lastName) => {
      dispatch({ type: Actions.SET_LAST_NAME, payload: { lastName } })
    },
    setPhone: (phone) => {
      dispatch({ type: Actions.SET_PHONE, payload: { phone } })
    },
    setEmail: (email) => {
      dispatch({ type: Actions.SET_EMAIL, payload: { email } })
    },
    nextStep: () => {
      dispatch({ type: Actions.OPEN_TAB, payload: { tabIndex: 1 } });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonForm);

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Actions } from '../../constants';
import './PersonForm.scss';

class PersonForm extends Component {

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

  handleSubmit(evt) {
    this.props.nextStep();
  }

  render() {
    return (
      <div className="PersonForm">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <Grid container spacing={24}>
            <Grid item sm={6} xs={12}>
              <TextValidator
                label="Имя"
                placeholder="Иван"
                onChange={this.onFirstNameChange.bind(this)}
                name="firstName"
                value={this.props.firstName}
                fullWidth
                validators={['required', 'maxStringLength:255']}
                errorMessages={[<label>Поле <b>Имя</b> обязательно для заполнения</label>, <label>Слишком длинное <b>Имя</b></label>]}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextValidator
                label="Фамилия"
                placeholder="Иванов"
                onChange={this.onLastNameChange.bind(this)}
                name="lastName"
                value={this.props.lastName}
                fullWidth
                validators={['required', 'maxStringLength:255']}
                errorMessages={[<label>Поле <b>Фамилия</b> обязательно для заполнения</label>, <label>Слишком длинное <b>Фамилия</b></label>]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                label="Телефон"
                placeholder="+79046524783"
                onChange={this.onPhoneChange.bind(this)}
                name="phone"
                value={this.props.phone}
                fullWidth
                validators={['required', 'matchRegexp:^\\+[1-9][0-9]{10}$']}
                errorMessages={[<label>Поле <b>Телефон</b> обязательно для заполнения</label>, <label><b>Телефон</b> должен иметь формат: <b>+79046524783</b> </label>]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                label="Email"
                placeholder="example@example.com"
                onChange={this.onEmailChange.bind(this)}
                name="email"
                value={this.props.email}
                fullWidth
                validators={['required', 'isEmail']}
                errorMessages={[<label>Поле <b>Email</b> обязательно для заполнения</label>, <label>Неправильный <b>Email</b></label>]}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className="btn-section">
            <Button
              type="submit"
              variant="contained"
              color="primary">
              Продолжить
          </Button>
          </Grid>
        </ValidatorForm>
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

import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

import { Actions } from '../../constants';
import './DeliveryForm.scss';

class DeliveryForm extends Component {

  handleSubmit(evt) {
    // TODO: add API call
  }

  onIsPickupChange(evt) {
    if (evt.target.value == 'delivery') {
      this.props.setIsPickup(false);
    } else {
      this.props.setIsPickup(true);
    }
    
  }
  onCountryChange(evt) {
    this.props.setCountry(evt.target.value);
  }
  onCityChange(evt) {
    this.props.setCity(evt.target.value);
  }
  onIndexChange(evt) {
    this.props.setIndex(evt.target.value);
  }
  onAddressChange(evt) {
    this.props.setAddress(evt.target.value);
  }
  onDateChange(evt) {
    this.props.setDate(evt.target.value);
  }
  onCommentChange(evt) {
    this.props.setComment(evt.target.value);
  }

  render() {
    return (
      <div className="DeliveryForm">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="Доставка"
                  name="deliveryType"
                  value={this.props.isPickup ? 'pickup' : 'delivery'}
                  onChange={this.onIsPickupChange.bind(this)}
                >
                  <FormControlLabel value="delivery" control={<Radio />} label="Доставка" />
                  <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {!this.props.isPickup ? (
              <React.Fragment>
                <Grid item sm={4} xs={12}>
                  <FormControl fullWidth className="country-select">
                    <Select
                      value={this.props.country}
                      onChange={this.handleChange}
                      fullWidth
                      displayEmpty
                      inputProps={{
                        name: 'country',
                        id: 'country',
                      }}
                    >
                      <MenuItem disabled value=''>Не выбрано</MenuItem>
                      {this.props.countryList.map(country => 
                        <MenuItem key={country} value={country}>{country}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextValidator
                    label="Город"
                    placeholder="Москва"
                    onChange={this.onCityChange.bind(this)}
                    name="city"
                    value={this.props.city}
                    fullWidth
                    validators={['required', 'maxStringLength:255']}
                    errorMessages={[<label>Поле <b>Город</b> обязательно для заполнения</label>, <label>Слишком длинное название <b>Города</b></label>]}
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextValidator
                    label="Индекс"
                    placeholder="398000"
                    onChange={this.onIndexChange.bind(this)}
                    name="index"
                    value={this.props.index}
                    fullWidth
                    validators={['required', 'maxStringLength:6', 'minStringLength:6']}
                    errorMessages={[<label>Поле <b>Индекс</b> обязательно для заполнения</label>, <label>Неправильный <b>Индекс</b></label>, <label>Неправильный <b>Индекс</b></label>]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    label="Адрес"
                    placeholder="г.Москва, ул. Космонавтов, 14/5"
                    onChange={this.onAddressChange.bind(this)}
                    name="address"
                    value={this.props.address}
                    fullWidth
                    validators={['required', 'maxStringLength:6']}
                    errorMessages={[<label>Поле <b>Адрес</b> обязательно для заполнения</label>, <label>Слишком длинный <b>Адрес</b></label>]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    label="Дата доставки"
                    placeholder="24/05/2017"
                    onChange={this.onDateChange.bind(this)}
                    name="date"
                    value={this.props.date}
                    fullWidth
                    validators={['required', 'matchRegexp:^[0-3][0-9]\\/[0-1][0-9]\\/20[1-2][0-9]$']}
                    errorMessages={[<label>Поле <b>Дата доставки</b> обязательно для заполнения</label>, <label>Неверная <b>Дата</b></label>]}
                  />
                </Grid>
              </React.Fragment>
            ) : ''}
            <Grid item xs={12}>
              <TextField
                className="comment-input"
                id="outlined-multiline-flexible"
                label="Комментарий к заказу"
                placeholder="Ваш комментарий здесь..."
                multiline
                rowsMax="8"
                value={this.props.comment}
                onChange={this.onCommentChange.bind(this)}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className="btn-section">
            <Button type="submit" variant="contained" color="primary">
              Оформить заказ
          </Button>
          </Grid>
        </ValidatorForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.delivery
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsPickup: (isPickup) => {
      dispatch({ type: Actions.SET_IS_PICKUP, payload: { isPickup } })
    },
    setCountry: (country) => {
      dispatch({ type: Actions.SET_COUNTRY, payload: { country } })
    },
    setCity: (city) => {
      dispatch({ type: Actions.SET_CITY, payload: { city } })
    },
    setIndex: (index) => {
      dispatch({ type: Actions.SET_INDEX, payload: { index } })
    },
    setAddress: (address) => {
      dispatch({ type: Actions.SET_ADDRESS, payload: { address } });
    },
    setDate: (date) => {
      dispatch({ type: Actions.SET_DATE, payload: { date } });
    },
    setComment: (commment) => {
      dispatch({ type: Actions.SET_COMMENT, payload: { commment } });
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryForm);
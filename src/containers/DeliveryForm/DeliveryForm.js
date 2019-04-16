import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './DeliveryForm.scss';

class DeliveryForm extends Component {
  render() {
    const name = "";

    return (
      <div className="DeliveryForm">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Доставка"
                name="deliveryType"
                onChange={this.handleChange}
              >
                <FormControlLabel value="delivery" control={<Radio />} label="Доставка" />
                <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl 
              error={name === ''}
              fullWidth={true}>
              <InputLabel htmlFor="component-error">Страна</InputLabel>
              <Input
                id="component-error"
                value={name}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
              />

              <FormHelperText id="component-error-text">Поле <b>Страна</b> обязательно для заполнения</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl 
              error={name === ''}
              fullWidth={true}>
              <InputLabel htmlFor="component-error">Город</InputLabel>
              <Input
                id="component-error"
                value={name}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
                placeholder="Москва"
              />

              <FormHelperText id="component-error-text">Поле <b>Город</b> обязательно для заполнения</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl 
              error={name === ''}
              fullWidth={true}>
              <InputLabel htmlFor="component-error">Индекс</InputLabel>
              <Input
                id="component-error"
                value={name}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
              />

              <FormHelperText id="component-error-text">Поле <b>Индекс</b> обязательно для заполнения</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl 
              error={name === ''}
              fullWidth={true}>
              <InputLabel htmlFor="component-error">Телефон</InputLabel>
              <Input
                id="component-error"
                value={name}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
                placeholder="+79046524783"
              />

              <FormHelperText id="component-error-text">Поле <b>Телефон</b> обязательно для заполнения</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl 
              error={name === ''}
              fullWidth={true}>
              <InputLabel htmlFor="component-error">Email</InputLabel>
              <Input
                id="component-error"
                value={name}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
                placeholder="example@example.com"
              />

              <FormHelperText id="component-error-text">Поле <b>Телефон</b> обязательно для заполнения</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} className="btn-section">
          <Button variant="contained" color="primary">
            Оформить заказ
          </Button>
        </Grid>
      </div>
    );
  }
}

export default DeliveryForm;

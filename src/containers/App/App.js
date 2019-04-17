import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';

import PersonForm from '../PersonForm/PersonForm';
import DeliveryForm from '../DeliveryForm/DeliveryForm';
import './App.scss';
import { Actions } from '../../constants';

class App extends Component {

  handleChange = (event, value) => {
    if (!value) {
      this.props.openTab(value);
    }
  };

  render() {
    const value = this.props.tabIndex;

    return (
      <div className="App">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="Основные данные" />
          <Tab disabled={value !== 1} label="Адрес доставки" />
        </Tabs>
        {value === 0 && <PersonForm></PersonForm>}
        {value === 1 && <div><DeliveryForm></DeliveryForm></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {
    openTab: (index) => {
      dispatch({ type: Actions.OPEN_TAB, payload: { tabIndex: index } });
    },
    clearDeliveryInfo: () => {
      dispatch({ type: Actions.CLEAR_DELIVERY_INFO })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import { Actions } from '../constants';

const initialState = {
  isPickup: false,
  country: '',
  countryList: [
    'Россия',
    'USA',
    'Китай'
  ],
  city: '',
  index: '',
  address: '',
  date: '',
  comment: ''
}

const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CLEAR_DELIVERY_INFO:
      return {
        ...initialState
      }

    default: {
      return state
    }
  }
}

export default deliveryReducer
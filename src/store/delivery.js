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

    case Actions.SET_IS_PICKUP:
      return {
        ...state,
        isPickup: action.payload.isPickup
      }

    default: {
      return state
    }
  }
}

export default deliveryReducer
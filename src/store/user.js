import { Actions } from '../constants';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case Actions.SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload.firstName
      }

    case Actions.SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload.lastName
      }

    case Actions.SET_PHONE:
      return {
        ...state,
        phone: action.payload.phone
      }

    case Actions.SET_EMAIL:
      return {
        ...state,
        email: action.payload.email
      }

    default: {
      return state
    }
  }
}

export default userReducer
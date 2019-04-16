import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import userReducer from './user';
import deliveryReducer from './delivery';
import { Actions } from '../constants';

const initialState = {
  tabIndex: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_TAB:
      return {
        ...state,
        tabIndex: action.payload.tabIndex
      }
    default: {
      return state
    }
  }
}

const store = createStore(combineReducers({
  root: rootReducer,
  user: userReducer,
  delivery: deliveryReducer
}), applyMiddleware(thunk))

export default store
import * as types from '../actions/types';

const initialState = {
  dots: ''
}

const dot = (state = initialState, action) => {
  switch (action.type) {
    case types.DOT_ADD:
      return Object.assign({}, state, {
        dots: state.dots + '.'
      })
    default:
      return state;
  }
}

export default dot

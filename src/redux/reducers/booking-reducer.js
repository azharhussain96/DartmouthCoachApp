// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {
  departure: '',
  destination: '',
  departDate: '',
  returnDate: '',
  departTime: '',
  returnTime: '',
}

const BookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DEPARTURE:
      return Object.assign({}, state, { departure: action.payload })
    case ActionTypes.UPDATE_DESTINATION:
      return Object.assign({}, state, { destination: action.payload })
    case ActionTypes.UPDATE_DATE:
      return Object.assign({}, state,
        {
          departDate: action.payload.departDate,
          returnDate: action.payload.returnDate,
          departTime: action.payload.departTime,
          returnTime: action.payload.returnTime,
        })
    default:
      return state
  }
}

export default BookingReducer

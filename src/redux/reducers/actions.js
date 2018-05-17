import { ActionTypes } from './types'

export function updateDeparture(location) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_DEPARTURE, payload: location })
  }
}

export function updateDestination(location) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_DESTINATION, payload: location })
  }
}

export function updateDate(departDate, returnDate, departTime, returnTime) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.UPDATE_DATE, payload: { departDate, returnDate, departTime, returnTime },
    })
  }
}

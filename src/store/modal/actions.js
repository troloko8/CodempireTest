export const CHECK_INPUT = 'CHECK_INPUT'
export const SET_MODAL_DISPLAY = 'SET_MODAL_DISPLAY'
export const SET_INPUT_STATUS = 'SET_INPUT_STATUS'

export const chekedInputs = (check) => ({
  type: CHECK_INPUT,
  payload: check.status,
  num: check.num
})

export const setModalDisplay = (display) => ({
  type: SET_MODAL_DISPLAY,
  payload: display
})

export const setInputStatus = (status) => ({
  type: SET_INPUT_STATUS,
  payload: status
})
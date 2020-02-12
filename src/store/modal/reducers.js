import { CHECK_INPUT } from './actions';
import { SET_MODAL_DISPLAY } from './actions';
import { SET_INPUT_STATUS } from './actions';
import { question } from './../../question/question';

let answersStatus = [];
for (let i = 0; i < question.length; i++) {
  answersStatus.push({
    num: i,
    status: false,
  })
}
// console.log(allAnswers)
// const answersStatus = [
//   {
//     num: 0,
//     status: false,
//   },
//   {
//     num: 1,
//     status: false,
//   },
//   {
//     num: 2,
//     status: false,
//   },
//   {
//     num: 3,
//     status: false,
//   },
// ]

const defaultState = {
  status: true,
  display: 'none',
  inputStatus: false
}

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_INPUT:

      for (let i = 0; i < answersStatus.length; i++) {
        if (action.num == i) {
          answersStatus[i].status = action.payload
        }
      }

      let modalStatus = false;
      answersStatus.find(el => el.status == false) == undefined
        ? modalStatus = false
        : modalStatus = true
      return {
        ...state,
        status: modalStatus
      }
    case SET_MODAL_DISPLAY:
      return {
        ...state,
        display: action.payload
      }
    case SET_INPUT_STATUS:
      return {
        ...state,
        inputStatus: action.payload
      }
    default:
      break
  }

  return state;
}
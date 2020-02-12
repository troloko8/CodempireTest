import { CHECK_ANSWER } from './actions';
import { RESET_RESULT_CORRECT_ANSWER } from './actions';
import { question } from './../../question/question';

let allAnswers = 0;
for (let i = 0; i < question.length; i++) {
  allAnswers += question[i].correctAnswer.length
}

const defaultState = {
  allAnswers: allAnswers,
  correctAnswers: 0
}

export const answersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_ANSWER:
      return {
        ...state,
        correctAnswers: state.correctAnswers + Number(action.payload)
      }
    case RESET_RESULT_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswers: action.payload
      }
    default:
      break
  }

  return state;
}
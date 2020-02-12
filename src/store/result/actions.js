export const CHECK_ANSWER = 'CHECK_ANSWER'
export const RESET_RESULT_CORRECT_ANSWER = 'RESET_RESULT_CORRECT_ANSWER'

export const checkingAnswer = (checking) => ({
  type: CHECK_ANSWER,
  payload: checking
})

export const resetResultCorrectAnswer = (value) => ({
  type: RESET_RESULT_CORRECT_ANSWER,
  payload: value
})



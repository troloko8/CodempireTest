import React, { useState, useEffect } from 'react';
import { chekedInputs } from '../../../store/modal/actions';
import { checkingAnswer } from '../../../store/result/actions';
import { connect } from 'react-redux';

function QuestionText(props) {

  const [counterAnswers, setCounterAnswers] = useState(0)

  const checkValue = {
    num: props.num,
    status: false,
  };

  const checkModal = (e) => {
    e.target.value === props.state.correctAnswer[0]
      ? setCounterAnswers(1)
      : setCounterAnswers(0)

    e.target.value === ''
      ? checkValue.status = false
      : checkValue.status = true
    props.chekedInputs(checkValue)
  }

  localStorage.setItem('textCurrent', counterAnswers)

  useEffect(() => {
    return () => {
      props.checkingAnswer(localStorage.getItem('textCurrent'))
    }
  }, [])

  return (
    <div className="question">
      <p className="question__title">{props.state.question}</p>
      <div className="question__container">
        <input type="text"
          onChange={checkModal}
          className="question__input-text"
          placeholder="Введите ответ"
        ></input>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = {
  chekedInputs,
  checkingAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionText)
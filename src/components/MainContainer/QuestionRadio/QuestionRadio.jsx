import React, { useState, useEffect } from 'react';
import { chekedInputs } from '../../../store/modal/actions';
import { checkingAnswer } from '../../../store/result/actions';
import { connect } from 'react-redux';

const inputСheck = (e, checkValue) => {
  const el = e.target.closest('.question').children;

  for (let i = 1; i < el.length; i++) {
    if (el[i].children[0].children[0].checked) {
      checkValue.status = true
      return
    } else {
      checkValue.status = false
    }
  }
}

function QuestionRadio(props) {
  const [counterAnswers, setCounterAnswers] = useState(0)
  const correctAnswer = props.state.correctAnswer
  const checkValue = {
    num: props.num,
    status: false,
  };

  const checkModal = (e) => {
    inputСheck(e, checkValue)
    props.chekedInputs(checkValue)
  }


  const setAnswer = (e) => {
    const input = e.target
    input.value === 'true'
      ? setCounterAnswers(1)
      : setCounterAnswers(0)
  }
  localStorage.setItem('radioCurrent', counterAnswers)

  useEffect(() => {
    return () => {
      props.checkingAnswer(localStorage.getItem('radioCurrent'))
    }
  }, [])

  const opitons = props.state.answer,
    answers = opitons.map((ans, index) => {
      return (
        <div className="question__container" key={index}>
          <label className="question__label">
            <input
              className="question__input-radio"
              name="answer2"
              value={correctAnswer.includes(ans)
                ? true
                : false}
              type="radio"
              onClick={setAnswer}
            ></input>
            <span className="question__text" >{ans}</span>
          </label>
        </div>
      )
    })

  return (
    <div className="question" onChange={checkModal}>
      <p className="question__title">{props.state.question}</p>
      {answers}
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionRadio)

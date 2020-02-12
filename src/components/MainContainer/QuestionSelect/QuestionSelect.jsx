import React, { useState, useEffect } from 'react';
import { chekedInputs } from '../../../store/modal/actions';
import { checkingAnswer } from '../../../store/result/actions';
import { connect } from 'react-redux';

function QuestionSelect(props) {
  const [counterAnswers, setCounterAnswers] = useState(0)
  const correctAnswer = props.state.correctAnswer
  const checkValue = {
    num: props.num,
    status: false,
  };

  const checkModal = (e) => {
    e.target.selectedIndex === 0
      ? checkValue.status = false
      : checkValue.status = true
    props.chekedInputs(checkValue)
  }

  const setAnswer = (e) => {
    const option = e.target
    option.value === 'true'
      ? setCounterAnswers(1)
      : setCounterAnswers(0)
  }

  localStorage.setItem('selectCurrent', counterAnswers)

  useEffect(() => {
    return () => {
      props.checkingAnswer(localStorage.getItem('selectCurrent'))
    }
  }, [])

  const opitons = props.state.answer
  const answers = opitons.map((ans, index) => {
    return (
      <option
        key={index}
        value={
          correctAnswer.includes(ans)
            ? true
            : false
        }
      >{ans}</option>
    )
  })

  return (
    <div className="question">
      <p className="question__title">{props.state.question}</p>
      <div className="question__container">
        <select
          defaultValue="Выберите правельный ответ"
          onChange={checkModal}
          onClick={setAnswer}
        >
          <option disabled>Выберите правельный ответ</option>
          {answers}
        </select>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSelect)

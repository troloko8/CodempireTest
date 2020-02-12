import React from 'react';
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

function QuestionCkeckbox(props) {
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

    if (input.value === 'true') {
      input.checked == true
        ? props.checkingAnswer(1)
        : props.checkingAnswer(-1)
    }
  }

  // useEffect(() => {
  //   return () => {
  //     props.checkingAnswer(localStorage.getItem(`checkboxCurrent${props.state.num}`))
  //   }
  // }, [])

  const opitons = props.state.answer,
    answers = opitons.map((ans, index) => {
      return (
        <div className="question__container" key={index} >
          <label className="question__label">
            <input
              className="question__input-checkbox"
              name="answer3"
              type="checkbox"
              value={correctAnswer.includes(ans)
                ? true
                : false}
              onClick={setAnswer}
            ></input>
            <span className="question__text">{ans}</span>
          </label>
        </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCkeckbox)

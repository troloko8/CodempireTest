import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalDisplay } from '../../store/modal/actions';
import { setInputStatus } from '../../store/modal/actions';
import { resetResultCorrectAnswer } from '../../store/result/actions';

function Result(props) {

  const reset = () => {
    //reset couner
    props.setInputStatus(false)
    props.setModalDisplay('none')
    props.resetResultCorrectAnswer(0)
  }

  return (
    <div className="result">
      <h2 className="result__title">Your result</h2>
      <p className="result__text">
        {props.result.correctAnswers}/{props.result.allAnswers}
      </p>
      <Link
        onClick={reset}
        to="/"
      >Back</Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
}

const mapDispatchToProps = {
  setModalDisplay,
  setInputStatus,
  resetResultCorrectAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)

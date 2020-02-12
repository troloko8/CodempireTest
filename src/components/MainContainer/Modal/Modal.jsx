import React from 'react'
import { connect } from 'react-redux';
import { setModalDisplay } from '../../../store/modal/actions';
import { setInputStatus } from '../../../store/modal/actions';
import { resetResultCorrectAnswer } from '../../../store/result/actions';
import { Link } from 'react-router-dom';

function Modal(props) {

  const reset = () => {
    //reset couner
    props.setInputStatus(false)
    props.setModalDisplay('none')
    props.resetResultCorrectAnswer(0)
  }


  return (
    <div className="modal" style={{ display: props.modal.display }}>
      <p className="modal__text">
        Каждый не отвеченный ответ считается
неправильным, Вы уверены что хотите продолжить?
        </p>
      <div className="modal__bottons">
        <Link className="modal__button" to="/result">
          Да
          </Link>
        <a
          className="modal__button"
          onClick={reset}
        >Нет</a>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = {
  setModalDisplay,
  setInputStatus,
  resetResultCorrectAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
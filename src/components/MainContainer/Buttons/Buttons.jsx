import React from 'react'
import { setModalDisplay } from '../../../store/modal/actions';
import { setInputStatus } from '../../../store/modal/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Buttons(props) {
  let urlResult = window.location.href + "/result"

  const toggleModal = () => {
    props.setInputStatus(true)
    props.modal.status == true
      ? props.setModalDisplay('flex')
      : props.setModalDisplay('none');
  }


  return (
    <div className="form__buttons">
      <Link
        className="form__button"
        onClick={toggleModal}
        to={
          props.modal.status == true
            ? "/"
            : "/result"
        }
      >Ответить</Link>
      {/* <Link
        className="form__button"
        onClick={toggleModal}
        to={
          props.modal.status == true
            ? "/"
            : "/result"
        }
      >Ответить</Link> */}
      <a
        className="form__button"
      >Очистить</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    result: state.result
  }
}

const mapDispatchToProps = {
  setModalDisplay,
  setInputStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
import React from 'react';
import QuestionText from './QuestionText/QuestionText'
import QuestionCkeckbox from './QuestionCkeckbox/QuestionCkeckbox'
import QuestionRadio from './QuestionRadio/QuestionRadio'
import QuestionSelect from './QuestionSelect/QuestionSelect'
import Buttons from './Buttons/Buttons';
import Modal from './Modal/Modal';
import { question } from './../../question/question';


const MainContainer = () => {

  const mapQuestion = question.map((qsn, index) => {
    switch (qsn.type) {
      case 'text':
        return <QuestionText state={qsn} key={index} num={index} />
      case 'radio':
        return <QuestionRadio state={qsn} key={index} num={index} />
      case 'checkbox':
        return <QuestionCkeckbox state={qsn} key={index} num={index} />
      case 'select':
        return <QuestionSelect state={qsn} key={index} num={index} />
    }
  })
  return (
    <form className="form">
      <div className="form__container">
        {mapQuestion}
        <Buttons />
        <Modal />
      </div>
    </form >
  )
}

export default MainContainer
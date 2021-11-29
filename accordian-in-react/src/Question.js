import React, { useState } from "react";

const Question = (props) => {
  const { title, info} = props;
  const [visible, setVisible] = useState(0);
  const [buttonSign, setButtonSign] = useState("+");
  // add a state variable here

  function showInfo() {
    if (buttonSign === "+") {
      setVisible(1);
      setButtonSign("-");
    } else {
      setVisible(0);
      setButtonSign("+");
    }
  }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => showInfo()}>
          {buttonSign}
        </button>
      </header>
      {visible === 1 ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;

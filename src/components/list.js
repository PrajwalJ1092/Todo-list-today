import React from "react";
import tick from '../assets/tick.png';
import nottick from '../assets/not_tick.png';

const List = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="listmain">
      <div onClick={() => toggle(id)} className="listcontent">
        <img src={isComplete ? tick : nottick} alt="Completion status" />
        <p className={isComplete ? "completed" : ""}>{text}</p>
      </div>
      <div>
        <button onClick={() => deleteTodo(id)}><i className="fi fi-rr-trash"></i></button>
      </div>
    </div>
  );
};

export default List;

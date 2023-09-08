import "./style/Card.css";
import React from "react";
import { Question } from "./model/Question";

interface CardProps {
  question: Question;
  focusId: number;
  focusChange: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ question, focusId, focusChange }) => {
  const isFocus = focusId === question.id;

  return (
    <div
      className={`card ${isFocus ? "bg-teal" : "bg-black"}`}
      role="button"
      onClick={() => focusChange(question.id)}
    >
      {!isFocus && <h2>{question.question}</h2>}
      {isFocus && <p>{question.answer}</p>}
    </div>
  );
};

export default Card;

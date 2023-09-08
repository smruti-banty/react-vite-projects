import "./style/Accordion.css";
import { Question } from "./model/Question";
import { useState } from "react";
interface AccordionProps {
  question: Question;
}
const Accordion: React.FC<AccordionProps> = ({ question }) => {
  const id = question.id < 10 ? "0" + question.id : question.id;
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div
        className="head"
        role="button"
        onClick={() => setOpen((open) => !open)}
      >
        <h1>{id}</h1>
        <h2>{question.question}</h2>
        <h2>{open ? "-" : "+"}</h2>
      </div>
      <div className={`body ${!open ? "hide" : ""}`}>
        <p>{question.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;

import "./style/App.css";
import Card from "./Card";
import data from "./assets/data.json";
import { Question } from "./model/Question";
import { useState } from "react";

function App() {
  const [focusId, setFocusId] = useState(0);
  const questions: Question[] = data;
  function onFocusChange(id: number) {
    setFocusId(focusId => focusId === id ? 0 : id);
  }

  return (
    <div className="cards">
      {questions.map((question) => (
        <Card question={question} focusId={focusId} focusChange={onFocusChange} key={question.id} />
      ))}
    </div>
  );
}

export default App;

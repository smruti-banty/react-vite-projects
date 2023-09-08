import "./App.css";
import { useState } from "react";
import moment from "moment";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);


  function onNextStep() {
    setStep((st) => st + 1);
  }

  function onPrevStep() {
    if (step > 1) setStep((st) => st - 1);
  }

  function onNextCount() {
    setCount((c) => c + step);
    setDate(date => moment(date).add(step, "days").toDate());
  }

  function onPrevCount() {
    setCount((count) => count - step);
    setDate(date => moment(date).subtract(step, "days").toDate());
  }

  return (
    <div className="App">
      <div>
        <button onClick={onPrevStep}>-</button>
        Step {step}
        <button onClick={onNextStep}>+</button>
      </div>
      <div>
        <button onClick={onPrevCount}>-</button>
        Count {count}
        <button onClick={onNextCount}>+</button>
      </div>
      <p>{date.toDateString()}</p>
    </div>
  );
}

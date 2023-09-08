import "./style/App.css";
import data from "./assets/data.json";
import { Question } from "./model/Question";
import Accordion from "./Accordion";

function App() {
  const questions: Question[] = data;

  return <div>
    {
      questions.map(question => (<Accordion question={question} key={question.id}/>))
    }
  </div>;
}

export default App;

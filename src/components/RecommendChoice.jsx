import { useEffect, useState } from 'react';
import choicesData from '../assets/jsons/recommend-choices.json';

export default function RecommendChoice({ handleProgress, handleType }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState([]);
  const [answer2, setAnswer2] = useState([]);
  const [result, setResult] = useState({ E: 0, I: 0, N: 0, S: 0, P: 0, J: 0, T: 0, F: 0 });

  const completeTest = () => {
    handleProgress((prev) => 'completed');
  };

  const chooseAnswer = (event) => {
    const number = event.target.dataset.answerNumber;
    let type;
    setResult((prev) => {
      if (number === '1') {
        type = answer1[1];
      } else if (number === '2') {
        type = answer2[1];
      }

      prev[type]++;

      return prev;
    });
    setQuestionIndex((prev) => ++prev);
  };

  useEffect(() => {
    if (questionIndex === 12) {
      if (result['E'] > result['I']) handleType((prev) => prev + 'E');
      else handleType((prev) => prev + 'I');

      if (result['S'] > result['N']) handleType((prev) => prev + 'S');
      else handleType((prev) => prev + 'N');

      if (result['T'] > result['F']) handleType((prev) => prev + 'T');
      else handleType((prev) => prev + 'F');

      if (result['J'] > result['P']) handleType((prev) => prev + 'J');
      else handleType((prev) => prev + 'P');
      completeTest();
    } else {
      setQuestion((prev) => choicesData[questionIndex].question);
      setAnswer1((prev) => choicesData[questionIndex].answer1);
      setAnswer2((prev) => choicesData[questionIndex].answer2);
    }
  }, [questionIndex]);

  return (
    <>
      <div className="recommend-progress">
        <span className="progress-number">{questionIndex + 1} / 12</span>
        <div className="progress-bar total"></div>
        <div className="progress-bar current" style={{ width: `calc((90vw * ${questionIndex + 1}) / 12)` }}></div>
      </div>
      <span className="recommend-quotes">"</span>
      <span className="recommend-question">{question}</span>
      <span className="recommend-quotes">"</span>

      <button className="recommend-answer" data-answer-number="1" onClick={chooseAnswer}>
        {answer1[0]}
      </button>
      <button className="recommend-answer" data-answer-number="2" onClick={chooseAnswer}>
        {answer2[0]}
      </button>
    </>
  );
}

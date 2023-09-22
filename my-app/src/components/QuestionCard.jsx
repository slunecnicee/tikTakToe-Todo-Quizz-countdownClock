function QuestionCard({ question, optionClicked }) {
  return (
    <div className="question-card">
      <h2>
        Question: {question.id + 1} out of {question.length}
      </h2>
      <h3 className="question-text">{question.text}</h3>
      <ul>
        {question.options.map((option) => (
          <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;

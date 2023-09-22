function FinalResults({ score, totalQuestions, restartGame }) {
  return (
    <div className="final-results">
      <h1>Final Results</h1>
      <h2>
        {score} out of {totalQuestions} correct - (
        {(score / totalQuestions) * 100}%)
      </h2>
      <button onClick={restartGame}>Restart game</button>
    </div>
  );
}

export default FinalResults;

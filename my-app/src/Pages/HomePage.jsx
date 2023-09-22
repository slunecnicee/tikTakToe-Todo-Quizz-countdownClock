import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome</h1>
      <button onClick={() => navigate("/todo")} className="todo-btn">
        Todo
      </button>
      <button onClick={() => navigate("/countdown")} className="countdown-btn">
        Countdown-Timer
      </button>
      <button onClick={() => navigate("/quizz")} className="quiz-btn">
        Quizz
      </button>
    </div>
  );
};

export default HomePage;

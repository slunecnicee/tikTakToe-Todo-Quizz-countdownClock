import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Quizz from './Pages/Quizz';
import Todo from './Pages/Todo';
import Countdown from './Pages/Countdown';
import TikTakToe from './tik-tak-toe/TikTakToe';



function App() {
  return (
<div className='app'> 
  <BrowserRouter>
  <Routes>

<Route path='/' element={<HomePage/>}/>
<Route path='/quizz' element={<Quizz/>}/>
<Route path='/todo' element={<Todo/>}/>
<Route path='/countdown' element={<Countdown/>}/>
<Route path='/tiktaktoe' element={<TikTakToe/>}/>

  </Routes>
  
  </BrowserRouter>
</div>
  );
}

export default App;

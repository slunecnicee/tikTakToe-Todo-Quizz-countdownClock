import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Quizz from './Pages/Quizz';
import Todo from './Pages/Todo';
import Countdown from './Pages/Countdown';


function App() {
  return (
<div className='app'> 
  <BrowserRouter>
  <Routes>

<Route path='/' element={<HomePage/>}/>
<Route path='/quizz' element={<Quizz/>}/>
<Route path='/todo' element={<Todo/>}/>
<Route path='/countdown' element={<Countdown/>}/>


  </Routes>
  
  </BrowserRouter>
</div>
  );
}

export default App;

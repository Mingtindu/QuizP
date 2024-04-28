import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/pages/UserDashboard';
// import Play from './components/pages/Play';
import Form  from './components/Form';
import QuizSelectionPage from './components/pages/QuizSelectionPage';
import Programming from './components/pages/Programming';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<UserDashboard/>}/>
          <Route path='/dashboard' element={<LoginForm/>}/>
          <Route path="/" element={<Form />} />
          <Route path="/play" element={<QuizSelectionPage />} />
          <Route path="/play/programming-quiz" element={<Programming />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

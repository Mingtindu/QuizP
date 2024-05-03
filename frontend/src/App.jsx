import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/pages/UserDashboard';
// import Play from './components/pages/Play';
import Form  from './components/Form';
import QuizSelectionPage from './components/pages/QuizSelectionPage';
import Programming from './components/pages/Programming';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import UserSection from './components/pages/UserSection';
function App() {
  return (
    <>
     
      <Router>
        <div>
          <Navbar/>
        <Routes>
          
          <Route path='/dashboard' element={<UserDashboard/>}/>
          <Route path='/user' element={<UserSection/>}/>
          <Route path='/nav' element={<Navbar/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path="/register" element={<Form />} />
          <Route path="/play" element={<QuizSelectionPage />} />
          <Route path="/play/programming-quiz" element={<Programming />} />
          {/* Other routes */}
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

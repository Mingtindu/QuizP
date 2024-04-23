import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/pages/UserDashboard';
import Play from './components/pages/Play';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/play" element={<Play />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

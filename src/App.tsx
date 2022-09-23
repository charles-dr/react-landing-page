import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import EventPage from './pages/Event';

const routers = [
  {
    path: '/',
    component: <HomePage />
  },
  {
    path: '/event',
    component: <EventPage />
  },
]

function App() {
  return (
    <Router>
      <Routes>
      {
        routers.map(router => 
        <Route 
          key={router.path}
          path={router.path}
          element={router.component}
        />)
      }
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './app.css';
import Home from './pages/home';
import BlockletPage from './pages/blocklet/BlockletPage';

function App() {
  const client = new QueryClient();
  return (
    <div className='app'>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blocklet-page' element={<BlockletPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';
  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}

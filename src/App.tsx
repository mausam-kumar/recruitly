import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<LoginForm />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
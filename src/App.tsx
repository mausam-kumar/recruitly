import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import CompanyList from './components/CompanyList';

function App() {

  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyList />} />
          <Route path="/auth" element={<LoginForm />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
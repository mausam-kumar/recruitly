import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import CompanyList from './components/CompanyList';
import Company from './components/Company';
import AddCompany from './components/AddCompany';
import EditCompany from './components/EditCompany';

function App() {

  return (
    <MantineProvider>
      <div style={{ padding: 16 }}>
        <Router>
          <Routes>
            <Route path="/" element={<CompanyList />} />
            <Route path="/company/:id" element={<Company />} />
            <Route path="/auth" element={<LoginForm />} />
            <Route path="/add" element={<AddCompany />} />
            <Route path="/edit/:id" element={<EditCompany />} />
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  )
}

export default App
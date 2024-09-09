import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import CompanyList from './components/CompanyList';
import Company from './components/Company';
import AddCompany from './components/AddCompany';
import EditCompany from './components/EditCompany';
import ProtectedRoute from './ProtectedRoute';
import useAuth from './hooks/useAuth';

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <MantineProvider>
      <div style={{ padding: 16 }}>
        <Router>
          <Routes>
            <Route path="/auth" element={<LoginForm />} />
            <Route element={<ProtectedRoute isAuthenticated={isLoggedIn} />}>
              <Route path="/" element={<CompanyList />} />
              <Route path="/company/:id" element={<Company />} />
              <Route path="/add" element={<AddCompany />} />
              <Route path="/edit/:id" element={<EditCompany />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  )
}

export default App
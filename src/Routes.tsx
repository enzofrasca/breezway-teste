import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export const AppRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route
      path='/'
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
  </Routes>
)

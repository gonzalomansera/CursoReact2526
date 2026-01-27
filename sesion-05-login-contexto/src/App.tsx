import { Route, Routes } from 'react-router-dom'

import { useAuth } from './context/AuthContext'
import { Toaster } from 'sonner'
import DashBoard from './components/Dashboad'
import { ProtectedRoute } from './components/ProtectedRoute'
import Home from './pages/Home'
import LoginForm from './components/FormularioLogin'

const App = () => {
  const { user } = useAuth()
  return (
    <div className='antialiased'>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path='/' element={!user ? <LoginForm /> : <Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

export default App

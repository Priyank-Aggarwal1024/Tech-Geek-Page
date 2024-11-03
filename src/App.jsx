import './App.css'
import './global.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AllAccess from './pages/AllAccess'
import ComboPack from './pages/ComboPack'
import TeckGeek from './pages/TeckGeek'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<AllAccess />} />
          <Route path='/combopack' element={<ComboPack />} />
          <Route path='/techgeek' element={<TeckGeek />} />
        </Routes>
      </div>
    </>
  )
}

export default App 

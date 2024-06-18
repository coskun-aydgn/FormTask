import './App.css'
import { Routes, Route } from 'react-router-dom'
import GenerelForm from './components/GenerelForm'
import PortalForm from './components/PortalForm'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<GenerelForm />} />
        <Route path='/portal' element={<PortalForm />} />
      </Routes>
    </div>
  )
}

export default App

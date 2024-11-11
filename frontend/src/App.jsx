import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './components/homeComponent/HomeComponent'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
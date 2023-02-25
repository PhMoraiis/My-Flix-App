import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Details from './pages/Details'
import Home from './pages/Home'
import Edit from './pages/EditList'
import List from './pages/Lists'
import NewList from './pages/NewList'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/newlist" element={<NewList/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/editlist/:id" element={<Edit/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

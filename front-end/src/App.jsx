import Login from "./Components/login"
import Signup from "./Components/Signup"
import Home from "./Components/Home/Home"
import Upload from "./Components/Upload/Upload"
import Landing from "./Components/Landing/landing"
import Admin from "./Components/Admin/admin"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/adminpanel" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
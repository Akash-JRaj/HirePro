import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Feed from "./pages/Feed"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/employer/dashboard" element={<Dashboard/>}></Route>
          <Route path="/employee/feed" element={<Feed/>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

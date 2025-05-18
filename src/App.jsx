import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CommonLayout from "./components/layouts/CommonLayout"
import WorkoutGenerator from "./pages/WorkoutGenerator"


function App() {
  
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-black via-slate-900 to-blue-600 text-white text-sm sm:text-base">
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route element={<CommonLayout/>}>
          <Route path="/generator" element={<WorkoutGenerator/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App

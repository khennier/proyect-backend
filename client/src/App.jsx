import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext.jsx"
import TasksPage from "./pages/TasksPage.jsx"
import TaskFormPage from "./pages/TaskFormPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<h1><HomePage/></h1>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/register' element={<RegisterPage/>}/>
      <Route element={<ProtectedRoute/>}>
       <Route path='/tasks' element={<h1><TasksPage/></h1>}/>
       <Route path='/add-task' element={<h1><TaskFormPage/></h1>}/>
       <Route path='/task/:id' element={<h1><TaskFormPage/></h1>}/>
       <Route path='/profile' element={<h1><ProfilePage/></h1>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
  
}
export default App
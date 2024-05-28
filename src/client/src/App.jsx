import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Project from './components/Project'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Contact from './components/Contact'
import OnlineShop from './pages/OnlineShop'
import Portfolio from './pages/Portfolio'
import Todo from './pages/Todo'
import QuestionBank from './pages/QuestionBank'
import EquationSolver from './pages/EquationSolver'
import RestaurantMnt from './pages/RestaurantMnt'
import CreateUserForm from './components/CreateUserForm'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
   
    <Routes>
      <Route path='/portfolio-using-react' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/usercreate' element={<CreateUserForm/>}/>

      <Route path='/project/onlineshop' element={<OnlineShop/>}/>
      <Route path='/project/portfolio' element={<Portfolio/>}/>
      <Route path='/project/todo' element={<Todo/>}/>
      <Route path='/project/questionbank' element={<QuestionBank/>}/>
      <Route path='/project/equation-solver' element={<EquationSolver/>}/>
      <Route path='/project/restaurants' element={<RestaurantMnt/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
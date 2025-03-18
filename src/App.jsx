import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message'
import Card from './components/Card'
import Game from './components/Game'
import Form from './components/Form'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './newpage/Login'
import Header from './newpage/Header'
import Kucing from './components/Kucing'
import ListUser from  './components/ListUser'
import HomeNew from './newpage/Home'
import CoinPage from './pages/Coin'
function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
    {/* <ListUser/> */}
    {/* <HomeNew/> */}
    {/* <Header/> */}
    
    {/* <Header style={{position: 'flex', top: 0, left: 0, width: '100%', zIndex: 1000}}></Header> */}
   {/* <Card>
    <Message name="John" color="red"/>
    <p>Sample of Children</p>
   </Card>
   <Game></Game>
   <Form/> */}
   <nav>
    <Link to = "/">Home</Link> | <Link to = "/About">About</Link> | <Link to = "/Login">Login</Link> | <Link to = "/CoinPage">Coin</Link>

   </nav>
   <Routes>
    <Route path = "/" element = {<Home/>}></Route>
    <Route path = "/About" element = {<About/>}></Route>
    <Route path = "/Login" element = {<Login/>}></Route>
    <Route path ="*" element = {<NotFoundPage/>}></Route>
    <Route path ="/CoinPage" element = {<CoinPage/>}></Route>
   </Routes>
    {/* {<LoginPage/>} */}
   </>
  )
}
export default App

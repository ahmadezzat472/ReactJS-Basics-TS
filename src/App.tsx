import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import InputForm from './Components/InputForm';
import ProfileUser from './Components/profileUser';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState({
    userName: "",
    address: "",
    email: "",
    password: "",
  })

  return (
    <>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} /> 
      {
        !isLogin ? 
        <InputForm userData={userData} setUserData={setUserData} setIsLogin={setIsLogin} /> : 
        <ProfileUser user={userData} />
      }
      
    </>
  )
}

export default App

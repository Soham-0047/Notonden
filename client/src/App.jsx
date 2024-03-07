
import { useSelector } from 'react-redux';
import './App.css'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecordForm from './components/RecordForm';
import Register from './components/Register';
import Login from './components/Login'
import RecordDisplay from './components/RecordDisplay';
import UpdateRecord from './components/UpdateRecord';


function App() {

  
  const user = useSelector((state) => state.user?.currentUser) ||"";

  console.log(user)
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/create" element={user ?<RecordForm/>:<Navigate to="/"/>}/>
      <Route path="/records"element={user ? <RecordDisplay/>:<Navigate to="/"/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/records/:id" element={user ? <UpdateRecord/> : <Navigate to="/"/>}/> 

     </Routes>
    </>
  )
}

export default App

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import ErrorMsg from './components/ErrorPage.jsx';
import { Outlet } from 'react-router-dom';
import { useEffect,useState} from 'react';
import UserContext from "./utils/UserContext"



function App() {
  const [userName,setUserName] =useState();
  useEffect(()=>{
    const data={name:"Ujjwal Mishra"}
    setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="App">
     
      <Header />
      <Outlet />
      
    </div>
    </UserContext.Provider>
  );
}

export default App;

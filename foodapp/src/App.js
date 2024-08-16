import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect,useState} from 'react';
import UserContext from "./utils/UserContext"
import {Provider} from "react-redux";
import appStore from './utils/appStore';



function App() {
  const [userName,setUserName] =useState();
  useEffect(()=>{
    const data={name:"Ujjwal Mishra"}
    setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="App">
     
      <Header />
      <Outlet />
      
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;

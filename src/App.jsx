import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";


function App() {
  return (
    <>
      {/* <Header />
      <Hero/> */}
      {/* <Login/> */}

      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes> */}
      <Dashboard/>
    </>
  );
}

export default App;

import { Link,Route, Routes } from "react-router-dom";
import './App.scss';
import React , {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import LoginForm from "./components/Login/LoginForm";
import Home from "./components/Home/Home";
import TradeLogger from "./components/TradeLogger/TradeLogger";
import NotFound from "./components/NotFound/NotFound";
import Pricing from "./components/Pricing/Pricing"


function App(){
    return(
        <div className="App">
                <header>
                <Navbar/>
                </header>
                <main>
                    <Routes>
                <Route path = "/about" element={<AboutUs/>}/>
                <Route path = "/pricing" element={<Pricing/>}/>
                <Route path = "/home" element={<Home/>}/>
                <Route path = "/tradeLogger" element={<TradeLogger/>}/>
                <Route path = "/notFound" element={<NotFound/>}/>
                <Route path = "/login" element={<LoginForm/>}/>

                    </Routes>
                </main>
        </div>
    )
}

// next steps fix links, Link with capital L check gitlab it has imported from Router (React Router DOM)

export default App;
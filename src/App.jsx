import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import LoginForm from "./components/Login/LoginForm";
import Home from "./components/Home/Home";
import TradeLogger from "./components/TradeLogger/TradeLogger";
import NotFound from "./components/NotFound/NotFound";
import Pricing from "./components/Pricing/Pricing";
import Profile from "./components/Profile/Profile";
import RegisterForm from "./components/Register/RegisterForm";
import Users from "./components/Users/Users";
import UsersCreate from "./components/Users/Create/UsersCreate";
import UsersEdit from "./components/Users/Edit/UsersEdit";
import TradeLoggerCreate from "./components/TradeLogger/Create/TradeLoggerCreate";
import TradeLoggerEdit from "./components/TradeLogger/Edit/TradeLoggerEdit";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = () => {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token").length > 0
      ) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };

    setInterval(checkLoggedIn, 1000);
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/home" element={<Home />} />
          {loggedIn ? (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/create" element={<UsersCreate />} />
              <Route path="/users/edit/:id" element={<UsersEdit />} />
              <Route path="/tradelogger" element={<TradeLogger />} />
              <Route
                path="/tradelogger/create"
                element={<TradeLoggerCreate />}
              />
              <Route
                path="/tradelogger/edit/:id"
                element={<TradeLoggerEdit />}
              />
            </>
          ) : (
            <>
              ¡
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

// next steps fix links, Link with capital L check gitlab it has imported from Router (React Router DOM)

export default App;
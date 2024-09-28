import React from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import UserProfile from "./components/UserProfile";
import Jobs from "./components/Jobs";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header will be persistent on all pages */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

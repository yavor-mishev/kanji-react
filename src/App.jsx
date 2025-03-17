import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Courses from "./pages/courses/courses.jsx";
import Chat from "./pages/chat";
import Settings from "./pages/settings";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Dashboard from './Screens/Dashboard';
import Projects from "./Screens/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

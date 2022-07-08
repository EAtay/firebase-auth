import "./App.css";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPage from "./components/forgotPage/forgotPage";
import LoginPage from "./components/loginPage/loginPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPage from "./components/forgotPage/forgotPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/forgotPage" element={<ForgotPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

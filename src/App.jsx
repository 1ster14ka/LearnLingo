import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Teachers from "./pages/Teachers/Teachers";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;

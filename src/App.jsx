import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;

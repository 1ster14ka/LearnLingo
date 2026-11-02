import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Teachers from "./pages/Teachers/Teachers";
import AuthModal from "./components/AuthModal/AuthModal";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
      <AuthModal />
    </AuthProvider>
  );
}
export default App;

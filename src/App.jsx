import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Teachers from "./pages/Teachers/Teachers";
import AuthModal from "./components/AuthModal/AuthModal";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import AuthRefresh from "./components/AuthRefresh/AuthRefresh";
import DataProvider from "./components/DataProvider/DataProvider";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <AuthRefresh />
      <DataProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route element={<PrivateRoute />}>
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AuthModal />
    </AuthProvider>
  );
}
export default App;

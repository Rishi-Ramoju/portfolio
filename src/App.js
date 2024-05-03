import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/login/ProtectedRoute";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="" element={<HomePage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;

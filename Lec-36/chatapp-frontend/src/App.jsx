import { Routes, Route, Navigate } from "react-router-dom"
import ChatApp from "./components/ChatApp"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector(state => state.auth)

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><ChatApp /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
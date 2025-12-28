import { Routes, Route, Navigate } from "react-router-dom"
import ChatApp from "./components/ChatApp"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useSelector } from "react-redux"
import { Toaster } from "react-hot-toast"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector(state => state.auth)

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  return (
    <>
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<ProtectedRoute><ChatApp /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
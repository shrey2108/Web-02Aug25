import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authThunk";

export default function Register() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
    try {
      await dispatch(registerUser({
        fullName: form.fullName,
        email: form.email,
        password: form.password
      })).unwrap();

      navigate('/login');
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(70%_60%_at_80%_10%,rgba(236,72,153,0.15),transparent_60%)]">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 space-y-6 border border-zinc-200">
        <div className="text-center">
          <div className="h-12 w-12 mx-auto rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center text-white font-bold shadow">C</div>
          <h1 className="text-2xl font-semibold mt-4">Create Account</h1>
          <p className="text-zinc-500 text-sm">Register to start chatting</p>
        </div>

        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full px-4 py-2 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="w-full py-2 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-semibold shadow hover:opacity-90 transition">
            Register
          </button>
        </form>

        <p className="text-center text-sm text-zinc-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
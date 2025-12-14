import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../features/auth/authThunk";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setForm(form => ({...form, [e.target.name]:e.target.value}))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(form)).unwrap();
      navigate("/products");
    } catch (err) {
      alert(err)
    }
  }

  return (
    <form onSubmit={submitHandler} class="max-w-sm mx-auto pt-4">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input onChange={changeHandler} type="email" name="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="salmankhan@gmail.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input onChange={changeHandler} type="password" name="password" id="password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      
      <p className="mt-2">Haven't registerd yet? <Link className="text-blue-600 hover:underline" to="/register">Register</Link></p>
    </form>
  )
}

export default Login
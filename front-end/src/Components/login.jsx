import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log("login: " + res.data.user.role);
        if (res.data.status === "Success") {
          if (res.data.user.role === "admin"){
            navigate("/adminpanel", { state: { user: res.data.user } });
          }else{
          navigate("/home", { state: { user: res.data.user } });
          }
        } else {
          setError("Incorrect username or password"); // Set the error message
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred"); // Set a generic error message
      });
  };

  return (
    <div className="flex h-screen bg-blue-500">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img
            className="w-20 mx-auto mb-4"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            alt="Tiger Logo"
          />
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              value="Login"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4">✖ Username or password is incorrect</p>
          )}

        </form>
        <footer>
          <Link
            to="#"
            className="text-indigo-700 hover:text-pink-700 text-sm float-left"
          >
            Forget Password?
          </Link>
          <Link
            to="/register"
            className="text-indigo-700 hover:text-pink-700 text-sm float-right"
          >
            Create Account
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Login;

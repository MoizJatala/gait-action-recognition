import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {
            navigate('/login')
        }).catch(err => console.log(err))
    }

  return (
    <div class="flex h-screen bg-blue-500">
<div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
      {/* <header>
        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>    */}
      <h2 class="text-3xl md:text-4xl font-extrabold text-blue-500 mb-3 text-center">Sign up</h2>
      <form onSubmit={handleSubmit}>
      <div>
  <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
  <input
    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
    type="text"
    name="username"
    onChange={(e) => setName(e.target.value)}
  />
</div>
<div>
  <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
  <input
    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
    type="email"
    name="email"
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
<div>
  <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
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
  />
</div>
      </form>  
      <footer>
      <Link to="/login" className="text-indigo-700 hover:text-pink-700 text-sm float-left">
            Already have an Acount!
          </Link>
      </footer>   
    </div>
</div>
  );
}

export default Signup;





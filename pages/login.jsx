import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SocialLogin from '../comp/SocialLogin'

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [err, setErr] = useState(null);
  const navigate = useRouter();
  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async e => {
    console.log(inputs)
    e.preventDefault();
    // console.log(inputs);
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', inputs);
      console.log(res)
      setErr(null)
      navigate.push("/")
    } catch (err) {
      setErr(err.response.data)
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className='auth'>
          <h3>Sign in with</h3>
          <SocialLogin />
          <p>Account Login</p>
          <form className='form' onSubmit={handleLogin}>
            <input type="text" autoComplete='off' autoFocus name="username" onChange={handleChange} placeholder='username' required />
            <input type="password" autoComplete='off' name="password" onChange={handleChange} placeholder='pasword' required />
            <input type='submit' value="Login" />
          </form>
          {err && <p className='err'>{err}</p>}
        </div>
        <div className="instructions">
          <Link href="/forgot">Forgot password?</Link>
          <Link href="/register" >Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SocialLogin from '../comp/SocialLogin';
import { Eye, EyeAlt } from '../resources/Icons';

const Register = () => {
  const [inputs, setInputs] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState(null);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const navigate = useRouter();
  const handleInputs = e => {
    e.preventDefault();
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErr(null);
    setMessage(null)
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setErr(null)
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', inputs);
      console.log(res.data);
      setMessage(res.data.message);
      setTimeout(() => {
        navigate.push('/login');
      }, 2000);
    } catch (err) {
      console.log(err.message);
      setErr(err.response.data);
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className='auth'>
          <h3>Sign in with</h3>
          <SocialLogin />
          <p>Create new account</p>
          <form className='form' onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleInputs} autoFocus id="username" placeholder='username' />
            <input type="email" name="email" onChange={handleInputs} id="email" placeholder='example@mail.com' />
            <label htmlFor="" className='label'>
              <input type={show ? 'text' : 'password'} name="password" onChange={handleInputs} placeholder='pasword' />
              <span className='eye' onClick={() => setShow(!show)}>{show ? <Eye /> : <EyeAlt />}</span>
            </label>
            <label htmlFor="" className='label'>
              <input type={show2 ? 'text' : 'password'} name="confirm-password" placeholder='confirm pasword' />
              <span className='eye' onClick={() => setShow2(!show2)}>{show2 ? <Eye /> : <EyeAlt />}</span>
            </label>
            <input type='submit' value="Register" />
          </form>
          {err ? <p className="err">{err}</p> : <p className="msg">{message}</p>}

        </div>
        <div className="instructions">
          {/* <Link to="/forgot">Forgot password </Link> */}
          <p>Already have an account?</p>
          <Link href="/login"> Sign in </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
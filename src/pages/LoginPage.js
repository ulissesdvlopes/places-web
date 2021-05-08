import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../providers/apiProvider'

const initialPayload = {
  username: "",
  password: "",
}

const LoginPage = props => {

  const [payload, setPayload] = useState(initialPayload)
  const history = useHistory();

  const onChange = e => {
    e.preventDefault()
    setPayload({...payload, [e.target.name]: e.target.value})
  }

  const send = async e => {
    e.preventDefault();
    try {
      const result = await login(payload)
      console.log(result)
      localStorage.setItem("user", JSON.stringify(result))
      history.push("/list")
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <main>
      <h1>SignIn</h1>
      <form>
        <label>
          Username
          <input name="username" onChange={onChange} value={payload.username} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={onChange} value={payload.password} />
        </label>
        <button onClick={send}>Enter</button>
      </form>
      <Link to="/register">SignUp</Link>
    </main>
  )
}

export default LoginPage

import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const initialPayload = {
  username: "",
  password: "",
}

const LoginPage = props => {

  const [payload, setPayload] = useState(initialPayload)

  const onChange = e => {
    e.preventDefault()
    setPayload({...payload, [e.target.name]: e.target.value})
  }

  const send = e => {
    e.preventDefault();
    console.log(payload);
  }

  return (
    <main>
      <h1>Login</h1>
      <form>
        <label>
          Username
          <input name="username" onChange={onChange} value={payload.username} />
        </label>
        <label>
          Password
          <input name="password" onChange={onChange} value={payload.password} />
        </label>
        <button onClick={send}>Entrar</button>
      </form>
      <Link to="/register">Cadastro</Link>
    </main>
  )
}

export default LoginPage

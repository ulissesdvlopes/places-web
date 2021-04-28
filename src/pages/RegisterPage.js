import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const initialPayload = {
  username: "",
  email: "",
  password: "",
}

const RegisterPage = props => {

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
      <h1>Cadastro</h1>
      <form>
        <label>
          Username
          <input name="username" onChange={onChange} value={payload.username} />
        </label>
        <label>
          E-mail
          <input name="email" onChange={onChange} value={payload.email} />
        </label>
        <label>
          Password
          <input name="password" onChange={onChange} value={payload.password} />
        </label>
        <button onClick={send}>Cadastrar</button>
      </form>
      <Link to="/">Login</Link>
    </main>
  )
}

export default RegisterPage

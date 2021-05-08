import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registerUser } from '../providers/apiProvider'

const initialPayload = {
  username: "",
  email: "",
  password: "",
}

const RegisterPage = props => {

  const [payload, setPayload] = useState(initialPayload)
  const history = useHistory();

  const onChange = e => {
    e.preventDefault()
    setPayload({...payload, [e.target.name]: e.target.value})
  }

  const send = async e => {
    e.preventDefault();
    try {
      const result = await registerUser(payload)
      console.log(result)
      localStorage.setItem("user", JSON.stringify(result))
      history.push("/list")
    } catch (error) {
      console.warn(error)
    }
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
          <input type="password" name="password" onChange={onChange} value={payload.password} />
        </label>
        <button onClick={send}>Cadastrar</button>
      </form>
      <Link to="/">Login</Link>
    </main>
  )
}

export default RegisterPage

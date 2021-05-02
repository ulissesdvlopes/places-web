import React, { useEffect, useState } from 'react'

const PlacesListPage = props => {

  const [user, setUser] = useState({});

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    console.log(userObj);
    setUser(userObj);
  }, [])

  return (
    <main>
      <h1>Places</h1>
      <p>Bem vindo, {user.username}</p>

      <form>
        <h2>Criar place</h2>
        
      </form>

      <section>
        <h2>Places disponíveis</h2>
        <ul>
          
        </ul>
      </section>
    </main>
  )
}

export default PlacesListPage

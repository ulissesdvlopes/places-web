import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getPlaces } from '../providers/apiProvider';

const PlacesListPage = props => {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    console.log(userObj);
    setUser(userObj);
  }, [])

  useEffect(() => {
    const getData = async () => {
      const result = await getPlaces();
      console.log(result);
      setList(result.data);
    }
    getData();
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
          {list.map(item => (
            <li key={`place-${item.id}`}>
              <Link to={`/chat/${item.name}`}>
                @{item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default PlacesListPage

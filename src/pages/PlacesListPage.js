import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { createPlace, getPlaces } from '../providers/apiProvider';

const initialPayload = { name: "" }

const PlacesListPage = props => {

  const history = useHistory();
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [payload, setPayload] = useState(initialPayload)

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

  const onChange = e => {
    e.preventDefault()
    setPayload({...payload, [e.target.name]: e.target.value})
  }

  const send = async (e) => {
    e.preventDefault();
    try {
      const result = await createPlace(payload, user?.id)
      console.log(result)
      setList([...list, result.data]);
    } catch (error) {
      console.warn(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    history.push("/")
  }

  return (
    <main>
      <h1>Places</h1>
      <p>Welcome, {`<${user.username}>`}</p>
      <button onClick={logout}>SignOut</button>

      <form>
        <h2>Create a place for you</h2>
        <label>
          Name
          <input name="name" onChange={onChange} value={payload.name} />
        </label>
        <button onClick={send}>Create</button>
      </form>

      <section>
        <h2>Available Places</h2>
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

// const baseUrl = "http://localhost:4000/api"
const baseUrl = "https://unwieldy-impressive-argusfish.gigalixirapp.com/api"

let headers = new Headers();
headers.append("Content-Type", "application/json");

export const registerUser = async payload => {
  const body = JSON.stringify(payload);
  console.log(body);
  const response = await fetch(`${baseUrl}/users`, {
    method: 'post',
    body: body,
    headers: headers
  })
  const data = await response.json();
  if(!response.ok) {
    console.warn(response)
    throw(data)
  }
  return data;
}

export const login = async payload => {
  const body = JSON.stringify(payload);
  console.log(body);
  const response = await fetch(`${baseUrl}/auth/`, {
    method: 'post',
    body: body,
    headers: headers
  })
  const data = await response.json();
  if(!response.ok) {
    console.warn(response)
    throw(data)
  }
  return data;
}

export const getPlaces = async () => {
  const response = await fetch(`${baseUrl}/places/`)
  const data = await response.json();
  if(!response.ok) {
    console.warn(response)
    throw(data)
  }
  return data;
}

export const createPlace = async (payload, owner_id) => {
  const body = JSON.stringify({...payload, owner_id});
  console.log(body);
  const response = await fetch(`${baseUrl}/places/`, {
    method: 'post',
    body: body,
    headers: headers
  })
  const data = await response.json();
  if(!response.ok) {
    console.warn(response)
    throw(data)
  }
  return data;
}

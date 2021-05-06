import React from 'react'
import { useParams } from 'react-router'

const PlaceChatPage = props => {

  const { place } = useParams();
  console.log(place);

  return (
    <main>
      <h1>@{place}</h1>
    </main>
  )
}

export default PlaceChatPage

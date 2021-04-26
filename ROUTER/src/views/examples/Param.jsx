import React from 'react'

import { useParams } from 'react-router-dom'

 const Param = props => {
  const { id } = useParams()

  return (
    <div className="Param">
      <h1>Param</h1>
      <h2>Value of param: {id}!</h2>
    </div>
)
}

export default Param
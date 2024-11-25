import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError();
  
  return (
    <div><h1>Something Went Wrong...!!! {error.statusText}</h1></div>
  )
}

export default Error

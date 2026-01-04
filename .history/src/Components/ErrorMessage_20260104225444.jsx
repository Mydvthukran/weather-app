import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div>
      <h1>Error occured due to wrong city name</h1>
               <h3></h3>  {message}
    </div>
  )
}

export default ErrorMessage

import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div>
      <h1>Error occured due to {message}</h1>
               <h3>refresh</h3>  
    </div>
  )
}

export default ErrorMessage

import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div>{message}
      <h1>Error occured due to </h1>
               <h3>refresh</h3>  
    </div>
  )
}

export default ErrorMessage

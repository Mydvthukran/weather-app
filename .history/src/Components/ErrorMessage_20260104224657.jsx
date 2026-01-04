import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <div>
      <h1>Error occured due to wrong city name</h1>
               refresh  {error}
    </div>
  )
}

export default ErrorMessage

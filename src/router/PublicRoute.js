import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({
  isAuthenticated,
  component : Component,
  ...rest
}) => {
  return (
    <div>
      <Route {...rest} 
        component={(props)=>(
          (!isAuthenticated)
            ? <Component {...props} />
            : <Redirect to="/"/>
        )}
      />
    </div>
  )
}

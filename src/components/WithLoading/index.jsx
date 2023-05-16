import React, { useEffect, useState } from 'react'
import { StyledContainer } from './styled'

function WithLoading(WrappedComponent) {
  return function LoadingComponent({ isLoading, ...props }) {
    const [loading, setLoading] = useState(isLoading)

    useEffect(() => {
      setLoading(isLoading)
    }, [isLoading])

    if (loading) {
      return (
        <StyledContainer>
          <div>
            <div className="body">
              <span>
                <span />
                <span />
                <span />
                <span />
              </span>
              <div className="base" />
              <div className="face" />
            </div>
            <div className="longfazers">
              <span />
              <span />
              <span />
              <span />
            </div>
            <h1>Redirecting</h1>
          </div>
        </StyledContainer>
      )
    }
    return <WrappedComponent {...props} />
  }
}

export default WithLoading

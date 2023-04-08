import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'

function WithLoading(WrappedComponent) {
  return function LoadingComponent({ isLoading, ...props }) {
    const [loading, setLoading] = useState(isLoading)

    useEffect(() => {
      setLoading(isLoading)
    }, [isLoading])

    if (loading) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>

      )
    }
    return <WrappedComponent {...props} />
  }
}

export default WithLoading

import { Grid, Skeleton, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { uid } from 'utils'

function WithLoadingSkeleton(WrappedComponent) {
  return function LoadingComponent({ isLoading, totalToRender = 1, ...props }) {
    const [loading, setLoading] = useState(isLoading)

    useEffect(() => {
      setLoading(isLoading)
    }, [isLoading])

    if (loading) {
      return (
        <Grid container spacing={2}>
          {[...new Array(totalToRender)].map(() => (
            <Grid item xs={12} sm={6} md={3} key={uid()}>
              <Box>
                <Skeleton variant="rectangular" height="185px" />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          ))}

        </Grid>
      )
    }
    return <WrappedComponent {...props} />
  }
}

export default WithLoadingSkeleton

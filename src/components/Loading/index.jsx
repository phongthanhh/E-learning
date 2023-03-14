import { CircularProgress, Box } from '@mui/material'
import React from 'react'

function Loading() {
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

export default Loading

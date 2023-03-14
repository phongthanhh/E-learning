import { Image } from 'antd'
import { blackGuySmile } from 'assets'
import React from 'react'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 100vw !important;
  height: 100vh !important;
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('Bug nè con trai:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <StyledImage src={blackGuySmile} alt="backGuySmile" />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

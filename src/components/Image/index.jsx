import React, { memo } from 'react'
import { Image as ImageAnt } from 'antd'

function Image({
  src, width = '100%', height = '100%', ...rest
}) {
  return (
    <ImageAnt src={src} width={width} height={height} fallback="https://picsum.photos/300/200" preview={false} {...rest} />
  )
}

export default memo(Image)

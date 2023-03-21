import { WithLoadingSkeleton } from 'components'
import React from 'react'
import Content from './Content'

const ContentWithLoadingSkeleton = WithLoadingSkeleton(Content)

function SlideCourses({ title, isLoading, courses }) {
  return (
    <>
      <h6>{title}</h6>
      <ContentWithLoadingSkeleton isLoading={isLoading} totalToRender={4} courses={courses} />
    </>
  )
}

export default SlideCourses

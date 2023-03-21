import React, {
  memo, useCallback, useMemo, useState
} from 'react'
import {
  Autocomplete, Box, CircularProgress, TextField, Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { Image } from 'components'
import { history } from 'App'
import { ROUTES_NAME } from 'constant'

function SearchCourse() {
  // Use hooks
  const { coursesForSearch, courses: { isLoading } } = useSelector((state) => state.courseReducer)
  // End use hooks

  // Use states
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  // End use states

  const onClose = () => {
    setOpen(false)
  }

  const onOpen = () => {
    setOpen(true)
  }

  const renderLoadingContent = useMemo(() => (
    <Box display="flex" justifyContent="center">
      <CircularProgress size={20} />
    </Box>
  ), [])

  const renderNoOptionsText = useMemo(() => (
    <Typography textAlign="center">Không có dữ liệu</Typography>
  ), [])

  const handleRedirectCourseDetail = useCallback((state) => {
    history.push(`${ROUTES_NAME.DETAIL}/${state.id}`)
    setValue(state.label)
    onClose()
  }, [])

  const renderOption = useCallback((props, state) => (
    <Box
      display="flex"
      alignItems="center"
      gap={4}
      {...props}
      onClick={() => handleRedirectCourseDetail(state)}
    >
      <Image height={50} width={50} src={state.image} />
      <Typography textAlign="center">{state.label}</Typography>
    </Box>
  ), [handleRedirectCourseDetail])

  return (
    <Autocomplete
      open={open}
      value={value}
      onOpen={onOpen}
      onClose={onClose}
      disablePortal
      options={coursesForSearch}
      renderOption={renderOption}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField label="Tìm kiếm" {...params} />}
      loading={isLoading}
      loadingText={renderLoadingContent}
      noOptionsText={renderNoOptionsText}
      clearOnBlur={false}
      isOptionEqualToValue={(option, val) => option.value === val.value}
    />
  )
}

export default memo(SearchCourse)

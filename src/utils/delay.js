const TIMER_DEFAULT = 500

export const debounce = (action, delay = TIMER_DEFAULT) => {
  let timerId

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => action(...args), delay)
  }
}

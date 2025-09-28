
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

export const setTheme = () => {
  const theme = window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light'

  document.documentElement.dataset.theme = theme
}

export const listenOsThemeChange = () => {
  if (!window.matchMedia || typeof window.matchMedia !== 'function') return

  // init theme
  setTheme()

  window.matchMedia(MEDIA_QUERY).addEventListener('change', (event) => {
    setTheme()
  })
}

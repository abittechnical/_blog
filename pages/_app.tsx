import '@/styles/bootstrap.scss'
import '@/styles/globals.scss'
import { useState, useEffect } from 'react'
import { AppContext } from '@/hooks'

const BlogApp = ({ Component, pageProps }) => {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <AppContext.Provider
      value={{
        toggleSearch: [searchOpen, setSearchOpen],
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default BlogApp

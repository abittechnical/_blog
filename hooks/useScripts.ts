import { useEffect } from 'react'

const useScripts = (url, position, async) => {
  useEffect(() => {
    const placement = document.querySelector(position)
    const script = document.createElement('script')
    script.src = url
    script.async = typeof async === 'undefined'
    placement.appendChild(script)
    return () => {
      placement.removeChild(script)
    }
  }, [url])
}

export default useScripts

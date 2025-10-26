import { useEffect, useState } from 'react'

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setTimeout(() => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }, 200)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrolled
}

"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

export function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const scrollToTop = useCallback(() => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, [])

  return (
    <div
      className={`scroll__content ${isVisible ? "scroll__content--on" : "scroll__content--off"}`}
      onClick={scrollToTop}
    >
      <Image src='/svg/arrowScroll.svg' alt='Go to top' width={60} height={60} />
    </div>
  )
}

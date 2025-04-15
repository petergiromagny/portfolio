"use client"

import { useRouter } from "next/navigation"

export function GoBackLink() {
  const router = useRouter()

  return (
    <div className='back__home container'>
      <span onClick={() => router.back()} className='button__back'>{`< Back to home`}</span>
    </div>
  )
}

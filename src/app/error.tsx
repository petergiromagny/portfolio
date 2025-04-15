"use client"

import Link from "next/link"

import { ErrorContent } from "@/components/errors"

export default function RootError() {
  return (
    <div className='error__container'>
      <ErrorContent error='Sorry, an unexpected error has occurred.' />

      <Link className='button' href='/'>
        Go back to home
      </Link>
    </div>
  )
}

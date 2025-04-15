import Link from "next/link"

import { ErrorContent } from "@/components/errors"

export default function RootNotFound() {
  return (
    <div className='error__container'>
      <ErrorContent error='Oops... Page not found' />

      <Link className='button' href='/'>
        Go back to home
      </Link>
    </div>
  )
}

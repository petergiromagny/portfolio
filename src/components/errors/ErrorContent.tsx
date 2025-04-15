export function ErrorContent({ error }: { error: string }) {
  return (
    <div className='error__content'>
      <h1>{error}</h1>

      <span className='circle__opacity circle__opacity--high'></span>
      <span className='circle__opacity circle__opacity--mid'></span>
      <span className='circle__opacity circle__opacity--low'></span>
    </div>
  )
}

interface Props {
  text: string
  onClick?: (item?: string | number) => void
}

export function Button({ text, onClick }: Props) {
  return (
    <button className='button' onClick={() => (onClick ? onClick() : undefined)}>
      {text}
    </button>
  )
}

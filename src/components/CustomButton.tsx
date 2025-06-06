import { colors } from '@/constants/colors'

export function CustomButton({
  type,
  className,
  children,
  onClick,
}: {
  type: 'button' | 'submit' | 'reset'
  className?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: colors.primary,
        height: '43px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
      }}
    >
      {children}
    </button>
  )
}

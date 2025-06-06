import { colors } from '@/constants/colors'

export function CustomButton({
  type,
  className,
  children,
}: {
  type: 'button' | 'submit' | 'reset'
  className?: string
  children?: React.ReactNode
}) {
  return (
    <button
      type={type}
      className={className}
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

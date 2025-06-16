import { colors } from '@/shared/constants/colors'

export function CustomInput({
  type,
  placeholder,
  className,
}: {
  type: string
  placeholder?: string
  className?: string
}) {
  return (
    <input
      type={type}
      className={className}
      style={{
        width: '100%',
        backgroundColor: colors.secondary,
        borderColor: colors.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        height: '56px',
        padding: '18px',
        borderRadius: '14px',
      }}
      placeholder={placeholder}
    />
  )
}

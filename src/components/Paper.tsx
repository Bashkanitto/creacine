import { colors } from '@/shared/constants/colors'
import { ReactNode } from 'react'

interface PaperProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
}

const Paper: React.FC<PaperProps> = ({ children, style, ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: colors.background,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Paper

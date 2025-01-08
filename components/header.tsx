export default Header

import React from 'react'
import { cn } from '@/lib/utils'

const IconLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={cn('w-8 h-8', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.09 8.26H21L15.45 12.74L17.54 19L12 14.52L6.46 19L8.55 12.74L3 8.26H9.91L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconLogo

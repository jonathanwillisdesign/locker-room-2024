"use client"

import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface FixedActionBarProps {
  children?: ReactNode
  rightContent?: ReactNode
}

const FixedActionBar: React.FC<FixedActionBarProps> = ({ children, rightContent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex justify-between items-center">
      <div>{children}</div>
      <div>{rightContent}</div>
    </div>
  )
}

export default FixedActionBar
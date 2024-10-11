import { useState, useEffect, useCallback } from 'react'

export interface Toast {
  id: string
  title: string
  description?: string
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => {
          if (toast.duration && Date.now() - new Date(toast.id).getTime() > toast.duration) {
            return false
          }
          return true
        })
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return { toasts, addToast, removeToast }
}

export const toast = {
  success: (props: Omit<Toast, 'id'>) => {
    // In a real implementation, this would add the toast to a global state
    console.log('Success Toast:', props)
  },
  error: (props: Omit<Toast, 'id'>) => {
    console.log('Error Toast:', props)
  },
}
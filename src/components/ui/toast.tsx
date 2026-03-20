import { useState, useEffect, useCallback } from "react"

interface Toast {
  id: number
  message: string
  type: "success" | "error"
}

let toastId = 0
let addToastFn: ((message: string, type: "success" | "error") => void) | null = null

export function toast(message: string, type: "success" | "error" = "success") {
  addToastFn?.(message, type)
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, type: "success" | "error") => {
    const id = ++toastId
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])

  useEffect(() => {
    addToastFn = addToast
    return () => {
      addToastFn = null
    }
  }, [addToast])

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`animate-fade-up rounded-lg px-4 py-3 text-sm font-medium shadow-tech-lg ${
            t.type === "success"
              ? "bg-primary text-primary-foreground"
              : "bg-destructive text-destructive-foreground"
          }`}
        >
          {t.message}
        </div>
      ))}
    </div>
  )
}
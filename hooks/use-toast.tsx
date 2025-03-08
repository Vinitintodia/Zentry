import * as React from "react"
import { toast as sonnerToast } from "sonner"

import type {
  ToastActionElement,
  ToastProps,
  ExternalToast
} from "@/components/ui/sonner"

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

// Simple wrapper around sonner toast
function toast(props: Omit<ToasterToast, "id">) {
  const { title, description, action, ...rest } = props
  
  return sonnerToast(title as string, {
    description,
    action,
    ...rest,
  } as ExternalToast)
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        sonnerToast.dismiss(toastId)
      } else {
        sonnerToast.dismiss()
      }
    },
  }
}

export { useToast, toast }

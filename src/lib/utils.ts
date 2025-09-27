import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const whatsappUrl = (message: string = "¡Hola! Quiero hacer un pedido de Big Pollo") => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/+573505890050?text=${encodedMessage}`
}
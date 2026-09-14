import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Asume números de teléfono españoles (9 dígitos, sin prefijo de país).
function spainDigits(phone: string) {
  return phone.replace(/\D/g, "").replace(/^0+/, "")
}

export function toTelHref(phone: string) {
  return `tel:+34${spainDigits(phone)}`
}

export function toWhatsAppHref(phone: string) {
  return `https://wa.me/34${spainDigits(phone)}`
}

export function toMailtoHref(email: string) {
  return `mailto:${email}`
}

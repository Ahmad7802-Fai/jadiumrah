import { User } from "../types/types"

export function getUserAvatar(user: User | null) {
  if (!user) return null

  return user.role === "agent"
    ? user.agent?.avatar
    : user.jamaah?.avatar
}

export function getUserName(user: User | null) {
  if (!user) return ""

  return user.role === "agent"
    ? user.agent?.nama || user.name
    : user.jamaah?.nama_lengkap || user.name
}
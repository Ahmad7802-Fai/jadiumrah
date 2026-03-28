import { api } from "@/lib/api"
import { ENDPOINT } from "@/lib/endpoints"

export async function login(email: string, password: string) {
  const res = await api.post(ENDPOINT.LOGIN, {
    email,
    password,
  })

  return res.data
}

export async function register(
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) {
  const res = await api.post(ENDPOINT.REGISTER, {
    name,
    email,
    password,
    password_confirmation,
  })

  return res.data
}

export async function getMe(token: string) {
  const res = await api.get(ENDPOINT.ME, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
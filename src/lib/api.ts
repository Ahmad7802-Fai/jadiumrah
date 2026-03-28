import { BASE_URL } from "./config"

// ===============================
// GENERIC API FETCH
// ===============================
export async function apiFetch<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: "include", // 🔥 WAJIB untuk Sanctum
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  })

  // ===============================
  // HANDLE ERROR
  // ===============================
  if (!res.ok) {
    let message = `API Error: ${res.status}`

    try {
      const data = await res.json()
      message = data?.message || message
    } catch {}

    throw new Error(message)
  }

  return res.json()
}

// ===============================
// CSRF (WAJIB UNTUK LOGIN)
// ===============================
export async function getCsrfCookie() {
  await fetch(`${BASE_URL.replace("/api/v1", "")}/sanctum/csrf-cookie`, {
    credentials: "include"
  })
}

// ===============================
// AUTH API
// ===============================
export async function login(data: {
  email: string
  password: string
}) {
  await getCsrfCookie()

  return apiFetch("/login", {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export async function logout() {
  return apiFetch("/logout", {
    method: "POST"
  })
}

export async function getUser() {
  return apiFetch("/user")
}
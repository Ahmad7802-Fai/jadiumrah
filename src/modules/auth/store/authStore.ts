import { create } from "zustand"

type AuthState = {
  user: any
  loading: boolean
  setUser: (user: any) => void
  setLoading: (loading: boolean) => void
  reset: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),

  reset: () =>
    set({
      user: null,
      loading: false,
    }),
}))
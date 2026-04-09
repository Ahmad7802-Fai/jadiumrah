export function getErrorMessage(err: any): string {
  return (
    err?.response?.data?.errors?.email?.message ||
    err?.response?.data?.message ||
    "Terjadi kesalahan"
  )
}
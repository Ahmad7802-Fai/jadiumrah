export function formatRupiah(value: number) {
  return `Rp ${Number(value || 0).toLocaleString("id-ID")}`
}
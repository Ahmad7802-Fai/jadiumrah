export function calculateTabungan(total: number, months: number) {
  const perMonth = total / months
  const perWeek = perMonth / 4
  const perDay = perMonth / 30

  return { perMonth, perWeek, perDay }
}
type Props = {
  children: React.ReactNode
  variant?: "title" | "subtitle" | "body" | "caption"
  className?: string
}

export default function Text({
  children,
  variant = "body",
  className = "",
}: Props) {
  const styles = {
    title: "text-lg md:text-2xl font-semibold",
    subtitle: "text-sm md:text-base font-medium",
    body: "text-sm text-gray-700",
    caption: "text-xs text-gray-400",
  }

  return (
    <p className={`${styles[variant]} ${className}`}>
      {children}
    </p>
  )
}
"use client"

type Props = {
  tabs: { label: string; value: string }[]
  value: string
  onChange: (val: string) => void
}

export default function TabsNav({ tabs, value, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar">

      {tabs.map((tab) => {
        const active = tab.value === value

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`
              px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition
              ${
                active
                  ? "bg-primary text-white"
                  : "bg-card border border-border text-text-soft"
              }
            `}
          >
            {tab.label}
          </button>
        )
      })}

    </div>
  )
}
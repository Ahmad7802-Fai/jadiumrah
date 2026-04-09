/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 🔥 IMPORTANT: fix kasus class tidak ke-generate (md:, lg:, dll)
  safelist: [
    "hidden",
    "block",
    "flex",
    "grid",
    "md:hidden",
    "md:block",
    "md:flex",
    "md:grid",
    "lg:grid",
    "xl:grid",
  ],

  theme: {
    extend: {
      /* =====================================================
         🎨 COLOR SYSTEM
      ===================================================== */
      colors: {
        primary: "#16a34a",
        "primary-light": "#22c55e",
        "primary-soft": "#dcfce7",

        bg: "#f5f7f4",
        card: "#ffffff",

        text: "#111827",
        "text-soft": "#6b7280",

        border: "#e5e7eb",

        success: "#16a34a",
        warning: "#f59e0b",
        danger: "#ef4444",
      },

      /* =====================================================
         📏 SPACING TOKEN SYSTEM
      ===================================================== */
      spacing: {
        page: "16px",
        "page-lg": "24px",

        section: "16px",
        "section-lg": "24px",

        content: "12px",
        "content-lg": "20px",
      },

      /* =====================================================
         🔤 TYPOGRAPHY SYSTEM
      ===================================================== */
      fontSize: {
        h1: ["clamp(24px, 5vw, 40px)", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["clamp(20px, 4vw, 32px)", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["clamp(18px, 3.5vw, 24px)", { lineHeight: "1.3", fontWeight: "600" }],
        h4: ["clamp(16px, 3vw, 20px)", { lineHeight: "1.4", fontWeight: "600" }],

        body: ["clamp(14px, 2.5vw, 16px)", { lineHeight: "1.6" }],
        caption: ["clamp(12px, 2vw, 13px)", { lineHeight: "1.4" }],
        small: ["clamp(10px, 1.8vw, 12px)", { lineHeight: "1.4" }],
      },

      /* =====================================================
         🔲 RADIUS SYSTEM
      ===================================================== */
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },

      /* =====================================================
         🌫️ SHADOW SYSTEM
      ===================================================== */
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.05)",
        md: "0 6px 20px rgba(0,0,0,0.08)",
        lg: "0 12px 40px rgba(0,0,0,0.12)",
      },

      /* =====================================================
         📱 BREAKPOINT (PASTIKAN DEFAULT)
      ===================================================== */
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },

  plugins: [],
}
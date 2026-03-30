import ForgotPasswordForm from "@/modules/auth/components/ForgotPasswordForm"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f4] px-4">
      
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm">

        {/* TITLE */}
        <h1 className="text-lg font-semibold text-center mb-4">
          Lupa Password
        </h1>

        {/* FORM */}
        <ForgotPasswordForm />

      </div>

    </div>
  )
}
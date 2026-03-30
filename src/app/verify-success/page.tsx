export default function VerifySuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f4] px-4">

      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm text-center space-y-4">

        <div className="text-4xl">✅</div>

        <h1 className="text-lg font-semibold">
          Email Berhasil Diverifikasi
        </h1>

        <p className="text-sm text-gray-500">
          Akun kamu sudah aktif. Silakan login untuk melanjutkan.
        </p>

        <a
          href="/login"
          className="block bg-green-600 text-white py-2 rounded-lg text-sm"
        >
          Login Sekarang
        </a>

      </div>

    </div>
  )
}
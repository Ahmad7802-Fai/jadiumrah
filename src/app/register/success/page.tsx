export default function RegisterSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow p-6 text-center max-w-sm w-full">

        <div className="text-4xl mb-3">🎉</div>

        <h1 className="text-lg font-semibold mb-2">
          Registrasi Berhasil!
        </h1>

        <p className="text-sm text-gray-500 mb-4">
          Akun kamu sudah aktif. Silakan lanjut login atau langsung eksplor paket umrah.
        </p>

        <div className="space-y-2">
          <a
            href="/"
            className="block w-full bg-green-600 text-white rounded-lg py-2 text-sm"
          >
            Ke Beranda
          </a>

          <a
            href="/login"
            className="block w-full border border-gray-300 rounded-lg py-2 text-sm"
          >
            Login
          </a>
        </div>

      </div>
    </div>
  )
}
import Link from "next/link"

export default function RegisterSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f4] px-4">

      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm text-center space-y-4">

        {/* ICON */}
        <div className="text-4xl">✅</div>

        {/* TITLE */}
        <h1 className="text-lg font-semibold">
          Registrasi Berhasil
        </h1>

        {/* DESC */}
        <p className="text-sm text-gray-500">
          Silakan cek email kamu untuk verifikasi akun sebelum login.
        </p>

        {/* BUTTON */}
        <Link
          href="/login"
          className="block w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm transition"
        >
          Ke Halaman Login
        </Link>

      </div>

    </div>
  )
}
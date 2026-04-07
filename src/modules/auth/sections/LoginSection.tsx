import LoginForm from "../components/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <LoginForm />
      </div>
    </div>
  )
}
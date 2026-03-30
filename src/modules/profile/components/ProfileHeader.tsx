export default function ProfileHeader({ user }: any) {
  return (
    <div className="bg-green-600 text-white p-4 rounded-b-2xl shadow">

      <div className="text-sm opacity-80">
        Profile
      </div>

      <div className="text-lg font-semibold">
        {user.name}
      </div>

      <div className="text-xs opacity-80">
        {user.email}
      </div>

    </div>
  )
}
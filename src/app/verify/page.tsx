import { Suspense } from "react"
import VerifyEmail from "@/modules/auth/components/VerifyEmail"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmail />
    </Suspense>
  )
}
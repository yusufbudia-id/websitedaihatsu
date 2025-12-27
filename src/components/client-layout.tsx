'use client'

import { Toaster } from "@/components/ui/toaster"
import { NoSSR } from "@/components/no-ssr"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <NoSSR>
        <Toaster />
      </NoSSR>
    </>
  )
}
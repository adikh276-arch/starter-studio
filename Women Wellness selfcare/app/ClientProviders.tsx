"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Suspense } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTranslation, I18nextProvider } from "react-i18next"
import i18n from "@/i18n/config"
import { useEffect, useState } from "react"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"

const LanguageManager = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (!pathname || !searchParams) return
    const langInUrl = searchParams.get("lang")
    
    if (langInUrl && langInUrl !== i18n.language) {
      i18n.changeLanguage(langInUrl)
    } else if (i18n.language && langInUrl !== i18n.language) {
      const newParams = new URLSearchParams(searchParams.toString())
      newParams.set("lang", i18n.language)
      router.replace(`${pathname}?${newParams.toString()}`)
    }
  }, [i18n.language, pathname, searchParams, router, i18n])

  return null
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={null}>
            <LanguageManager />
          </Suspense>
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </I18nextProvider>
  )
}

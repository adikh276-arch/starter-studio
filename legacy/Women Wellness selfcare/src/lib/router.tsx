"use client"
import { useRouter as useNextRouter, useParams as useNextParams, usePathname } from "next/navigation"
import { useEffect } from "react"
import NextLink from "next/link"

export function useNavigate() {
  const router = useNextRouter()
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === 'number') {
      router.back()
    } else {
      options?.replace ? router.replace(to) : router.push(to)
    }
  }
}

export function Navigate({ to, replace }: { to: string, replace?: boolean }) {
  const router = useNextRouter()
  useEffect(() => { replace ? router.replace(to) : router.push(to) }, [to, replace, router])
  return null
}

export function useParams<T = Record<string, string>>(): T {
  return useNextParams() as unknown as T
}

export function useLocation() {
  const pathname = usePathname()
  return { pathname }
}

export function Link({ to, replace, children, className, ...props }: any) {
  return (
    <NextLink href={to} replace={replace} className={className} {...props}>
      {children}
    </NextLink>
  )
}

export interface NavLinkProps {
  to: string;
  className?: string | ((props: { isActive: boolean }) => string);
  children?: React.ReactNode;
  [key: string]: any;
}

export function NavLink({ to, className, children, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === to || pathname.startsWith(to + "/")
  
  const resolvedClassName = typeof className === 'function' 
    ? className({ isActive }) 
    : className
    
  return (
    <NextLink href={to} className={resolvedClassName} {...props}>
      {children}
    </NextLink>
  )
}

import Link from "next/link"
import type { AnchorHTMLAttributes, ReactNode } from "react"

interface SiteLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
  children: ReactNode
}

/** Client-side navigation for internal routes; a plain anchor for in-page hashes and mailto. */
export function SiteLink({ href, children, ...rest }: SiteLinkProps) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}

import { FileText } from "lucide-react"
import { ContactPanel } from "@/components/sections/contact-panel"
import { ActionLink } from "@/components/ui/action-link"
import { contact } from "@/content/home/contact"
import { whitepaperHref } from "@/content/site"

export function ContactSection() {
  return (
    <ContactPanel
      id="contact"
      headingId="contact-title"
      copy={contact}
      secondary={
        <ActionLink href={whitepaperHref} variant="secondary">
          <FileText aria-hidden="true" className="h-4 w-4" />
          {contact.secondaryCta}
        </ActionLink>
      }
    />
  )
}

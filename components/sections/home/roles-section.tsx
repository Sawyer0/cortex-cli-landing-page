import { SectionHeading, SectionShell } from "@/components/sections/section-shell"
import { RoleTabs } from "@/components/widgets/role-tabs/role-tabs"
import { roles } from "@/content/home/roles"

export function RolesSection() {
  return (
    <SectionShell id="roles" labelledBy="roles-title">
      <SectionHeading id="roles-title" eyebrow={roles.eyebrow} lead={roles.headline.lead} emphasis={roles.headline.emphasis} />
      <RoleTabs learnMoreHref="#contact" />
    </SectionShell>
  )
}

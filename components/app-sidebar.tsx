import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar'
import { ChartGantt, LayoutDashboard, Lightbulb, ListTodo } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

const items = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Ideas', href: '/ideas', icon: Lightbulb },
  { name: 'Tasks', href: '/tasks', icon: ListTodo },
  { name: 'Timeline', href: '/timeline', icon: ChartGantt },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='flex items-center justify-between'>
        <strong>Dev Tracker</strong>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <Button asChild variant="link">
                    <Link href={item.href} className='flex items-center'>
                      <item.icon className="mr-2 h-6 w-6" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <strong>Footer</strong>
      </SidebarFooter>
    </Sidebar>
  )
}

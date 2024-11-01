import { ChartPie, Goal, ListTodo } from 'lucide-vue-next'

export type NavLinkType = {
  name: string
  href: string
  icon: any
  isActive?: boolean
}

export const links: NavLinkType[] = [
  { name: 'Overview', href: '/', icon: ChartPie, isActive: false },
  { name: 'Tasks', href: '/tasks', icon: ListTodo, isActive: false },
  { name: 'Goal', href: '/goal', icon: Goal, isActive: false },
]

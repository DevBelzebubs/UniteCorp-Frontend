export interface Stat {
  value: number
  suffix?: string
  label: string
}

export interface Partner {
  id: string
  name: string
}

export type CauseCategoryId = 'mentorship' | 'environment' | 'digital' | 'health'

export interface CauseCategory {
  id: CauseCategoryId
  label: string
}

export interface FeaturedCause {
  id: string
  title: string
  description: string
  category: CauseCategory
  location: string
  volunteers: number
  volunteersGoal: number
  progress: number
  image: string
}

export interface HowItWorksStep {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  initials: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface FooterLink {
  label: string
  href: string
  disabled?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

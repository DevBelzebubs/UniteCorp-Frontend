import type { FooterColumn, NavLink } from './types'



export const navLinks = ref<NavLink[]>([
  { label: 'Inicio', href: '#inicio' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Causas', href: '#causas' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' }
])

export const footerDescription =
  'UniteCorp conecta a profesionales corporativos con organizaciones sociales para crear impacto real en sus comunidades.'

export const footerColumns: FooterColumn[] = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Explorar Oportunidades', href: '#causas' },
      { label: 'Para Empresas', href: '#impacto' },
      { label: 'Para ONGs', href: '#impacto' },
      { label: 'Casos de Éxito', href: '#testimonios' }
    ]
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Sobre Nosotros', href: '#inicio' },
      { label: 'Contacto', href: 'mailto:hola@unitecorp.com' },
      { label: 'Privacidad', href: '#', disabled: true },
      { label: 'Términos', href: '#', disabled: true }
    ]
  }
]

export const footerCopyright = '© 2026 UniteCorp. Todos los derechos reservados.'

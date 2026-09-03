import type { CauseCategory, FeaturedCause } from './types'

export const causeCategories: CauseCategory[] = [
  { id: 'mentorship', label: 'Mentoría' },
  { id: 'environment', label: 'Ambiental' },
  { id: 'digital', label: 'Digital' },
  { id: 'health', label: 'Salud' }
]

export const featuredCauses: FeaturedCause[] = [
  {
    id: 'mentoria-jovenes',
    title: 'Mentoría para Jóvenes',
    description:
      'Acompaña a estudiantes de secundaria en su desarrollo profesional y académico.',
    category: { id: 'mentorship', label: 'Mentoría' },
    location: 'Lima, Perú',
    volunteers: 240,
    volunteersGoal: 300,
    progress: 80,
    image: '/images/cause-mentorship.svg'
  },
  {
    id: 'reforestacion-urbana',
    title: 'Reforestación Urbana',
    description:
      'Ayuda a crear pulmones verdes en áreas metropolitanas desfavorecidas.',
    category: { id: 'environment', label: 'Ambiental' },
    location: 'Quito, Ecuador',
    volunteers: 180,
    volunteersGoal: 400,
    progress: 45,
    image: '/images/cause-environment.svg'
  },
  {
    id: 'asesoria-digital-ongs',
    title: 'Asesoría Digital a ONGs',
    description:
      'Brinda soporte en transformación digital y estrategia a organizaciones sin fines de lucro.',
    category: { id: 'digital', label: 'Digital' },
    location: 'Ciudad de México',
    volunteers: 320,
    volunteersGoal: 350,
    progress: 95,
    image: '/images/cause-digital.svg'
  }
]

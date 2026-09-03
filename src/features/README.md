# src/features — Capa de negocio (Clean Architecture + DDD)

El negocio de **UniteCorp** se organiza por **features** (bounded contexts). Cada
feature contiene sus 3 capas y las dependencias siempre apuntan hacia el dominio:

```
src/features/<feature>/
  domain/           # Entidades, value objects, agregados y contratos (interfaces de repositorio)
  application/      # Use cases / servicios de aplicación (lógica de orquestación)
  infrastructure/   # Implementaciones concretas de los contratos (DB, API, in-memory)
```

## Reglas de arquitectura

- `domain/` y `application/` **NO** importan Vue, Nuxt, framworks ni librerías externas.
- `domain/` no conoce `application/` ni `infrastructure/`.
- `infrastructure/` implementa las interfaces definidas en `domain/`.
- Los use cases de `application/` dependen de interfaces (ports), nunca de implementaciones.
- La inyección de dependencias (repositorio → use case) se centraliza en `src/shared/`.
- La presentación (carpeta `app/`) consume los use cases a través de composables.
- La **landing** (en `app/landing/`) es una capa de marketing autocontenida y NO
  depende de `src/`. Cuando el negocio exista, la landing se adaptará para consumirlo.

## Bounded contexts planificados

| Feature        | Responsabilidad                                    |
| -------------- | -------------------------------------------------- |
| `causes`       | Causas / oportunidades de voluntariado             |
| `volunteers`   | Perfiles y participación de voluntarios            |
| `organizations`| ONGs y sus proyectos                               |
| `partnerships` | Empresas aliadas y programas corporativos          |
| `testimonials` | Testimonios y casos de éxito                       |
| `content`      | Contenido dinámico (stats, pasos, FAQs)            |
| `newsletter`   | Suscripciones y distribución                       |

> Estado actual: **sin desarrollar**. Estas carpetas solo establecen la convención.

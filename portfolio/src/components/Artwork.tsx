import type { CoverId } from '../data/covers'
import { covers } from '../data/covers'

export function CoverFrame({
  cover,
  alt,
  tone,
  priority = false,
}: {
  cover: CoverId
  alt: string
  tone: 'butter' | 'lilac' | 'blush' | 'ink'
  priority?: boolean
}) {
  return (
    <figure className="cover-frame relative bg-white" data-tone={tone}>
      <div className="overflow-hidden bg-white">
        <img
          src={covers[cover]}
          alt={alt}
          width={2048}
          height={716}
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          className="block h-auto min-h-[12rem] w-full object-contain"
        />
      </div>
    </figure>
  )
}

export function ArrowDoodle({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 70"
      className={`h-14 w-28 text-blush-deep ${className}`}
      fill="none"
    >
      <path
        d="M8 42C34 18 62 14 96 28c10 4 18 8 28 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M108 22c6 4 12 8 16 12-8 1-14 6-18 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Roofline({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 80"
      className={`h-16 w-44 text-lilac-deep ${className}`}
      fill="none"
    >
      <path
        d="M8 58 L70 22 L110 50 L168 16 L212 54"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M70 22 v36 M168 16 v40" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M40 64 h28 M128 64 h30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      />
    </svg>
  )
}

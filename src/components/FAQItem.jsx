import { useState } from 'react'

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function FAQItem({ question, answer, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div
      role="button"
      aria-expanded={expanded}
      tabIndex={0}
      onClick={() => setExpanded((e) => !e)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setExpanded((v) => !v)}
      className={[
        'border-b border-[#e6eff5] py-6 flex flex-col gap-2 cursor-pointer',
        'hover:bg-[#f8fbff] rounded-sm transition-colors duration-150',
        'outline-none focus-visible:ring-2 focus-visible:ring-[#337eb1]',
      ].join(' ')}
    >
      <div className="flex gap-4 items-center">
        <p className="flex-1 text-body-lg-bold text-[var(--text-primary)]">
          {question}
        </p>
        <span
          className={[
            'shrink-0 w-5 h-5 flex items-center justify-center text-[var(--text-primary)]',
            'transition-transform duration-300 ease-in-out',
            expanded ? 'rotate-45' : 'rotate-0',
          ].join(' ')}
        >
          <PlusIcon />
        </span>
      </div>

      {/* Grid-rows trick: animates height from 0 → auto without JS measurement */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-body-md-regular text-[var(--text-secondary)] max-w-[564px] pb-1">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

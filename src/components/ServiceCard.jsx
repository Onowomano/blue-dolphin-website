/**
 * ServiceCard
 *
 * Props:
 *   title       – card heading
 *   description – body text
 *   link        – optional URL, makes the card a clickable anchor
 *   children    – optional image/content slot
 *   className   – extra Tailwind classes
 *
 * States (CSS-driven):
 *   default – opacity-90, no shadow
 *   hover   – full opacity, elevated shadow
 */
export default function ServiceCard({ title, description, link, children, className = '' }) {
  const Tag = link ? 'a' : 'div'

  return (
    <Tag
      {...(link ? { href: link } : {})}
      className={[
        'bg-[var(--bg-primary)] rounded-[20px] overflow-hidden flex flex-col flex-1 min-w-0',
        'h-[400px] opacity-90',
        'transition-all duration-200',
        'hover:opacity-100 hover:shadow-xl',
        link ? 'no-underline' : '',
        'cursor-pointer',
        className,
      ].join(' ')}
    >
      <div className="p-6 flex flex-col gap-2 shrink-0">
        <p className="text-body-lg-bold text-[var(--text-secondary)]">
          {title}
        </p>
        <p className="text-body-md-regular text-[var(--text-link)]">
          {description}
        </p>
      </div>

      {children && (
        <div className="flex-1 relative overflow-hidden min-h-[278px]">
          {children}
        </div>
      )}
    </Tag>
  )
}

/**
 * ServiceCard
 *
 * Props:
 *   title       – card heading
 *   description – body text
 *   children    – optional image/content slot
 *   className   – extra Tailwind classes
 *
 * States (CSS-driven):
 *   default – opacity-90, no shadow
 *   hover   – full opacity, elevated shadow
 */
export default function ServiceCard({ title, description, children, className = '' }) {
  return (
    <div
      className={[
        'bg-white rounded-[20px] overflow-hidden flex flex-col flex-1 min-w-0',
        'h-[400px] opacity-90',
        'transition-all duration-200',
        'hover:opacity-100 hover:shadow-xl',
        className,
      ].join(' ')}
    >
      <div className="p-6 flex flex-col gap-2 shrink-0">
        <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#00263f] tracking-normal">
          {title}
        </p>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#00263f] tracking-[-0.32px]">
          {description}
        </p>
      </div>

      {children && (
        <div className="flex-1 relative overflow-hidden min-h-0">
          {children}
        </div>
      )}
    </div>
  )
}

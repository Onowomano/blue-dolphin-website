/**
 * Button
 *
 * Props:
 *   label       – button text
 *   size        – "md" (default) | "sm"
 *   hasLeftIcon – show icon slot on the left
 *   leftIcon    – ReactNode icon
 *   disabled    – boolean
 *   onClick     – click handler
 *   className   – extra Tailwind classes
 */
export default function Button({
  label,
  size = 'md',
  hasLeftIcon = false,
  leftIcon = null,
  disabled = false,
  onClick,
  className = '',
}) {
  const sizes = {
    md: 'px-4 py-[10px] gap-[10px] text-[16px] leading-[22px]',
    sm: 'px-3 py-[6px] gap-[8px] text-[14px] leading-[22px]',
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center rounded-[9999px]',
        'bg-[#fde0b5] text-[#000910]',
        "text-body-lg-bold",
        'transition-colors duration-150',
        'hover:bg-[#f8c87a]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizes[size],
        className,
      ].join(' ')}
    >
      {hasLeftIcon && leftIcon && (
        <span className="shrink-0 flex items-center">{leftIcon}</span>
      )}
      <span>{label}</span>
    </button>
  )
}

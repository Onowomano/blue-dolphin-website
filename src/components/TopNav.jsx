import logoBlue from "../assets/logo-blue.svg";
import { PhoneIcon } from "@heroicons/react/outline";
import WhatsAppIcon from '../assets/whatsapp-logo.svg'


export default function TopNav() {
  return (
    <div className="fixed top-[24px] left-1/2 -translate-x-1/2 z-50 w-[1080px] max-w-[calc(100%-48px)]">
      <div className="bg-[var(--bg-primary)] flex items-center justify-between px-[20px] py-[14px] rounded-[9999px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <img src={logoBlue} alt="Blue Dolphin Express" className="h-5 w-auto" />

        {/* Center nav links */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Services', href: '#services' },
            { label: 'FAQs', href: '#faqs' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={[
                "flex items-center justify-center px-2 py-2 rounded",
                "text-body-md-regular text-[var(--text-primary)] whitespace-nowrap",
                "hover:text-[var(--text-link)] transition-colors duration-150 no-underline",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="flex gap-2 items-center shrink-0">
          <a
            href="tel:+4407982333351"
            className="text-body-md-regular text-[var(--text-secondary)] tracking-[-0.14px] whitespace-nowrap"
          >
            0798 233 3351
          </a>

         <a href="tel:+447982333351"
         className="bg-[var(--bg-accent-orange-default)] flex items-center p-[6px] rounded-[1000px] text-[var(--text-primary)]" >
          <PhoneIcon className="h-4 w-4" />
         </a>
          <a href="https://wa.me/447982333351" target="_blank" rel="noopener noreferrer"
          className="bg-[var(--bg-accent-orange-default)] flex items-center p-[6px] rounded-[1000px] text-[var(--text-primary)]"
          >
            <img src={WhatsAppIcon} alt="WhatsApp Logo" className="h-5 w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

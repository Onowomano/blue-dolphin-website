import logoBlue from "../assets/logo-blue.svg";
import { PhoneIcon } from "@heroicons/react/solid";

export default function TopNav() {
  return (
    <div className="fixed top-[24px] left-1/2 -translate-x-1/2 z-50 w-[1080px] max-w-[calc(100%-48px)]">
      <div className="bg-[#fff] flex items-center justify-between px-[20px] py-[14px] rounded-[9999px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]">
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
                "text-body-md-regular text-[#00263f] whitespace-nowrap",
                "hover:text-[#005E9D] transition-colors duration-150 no-underline",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="flex gap-2 items-center shrink-0">
          <a
            href="tel:+447123456789"
            className="text-body-md-regular text-[#00263f] tracking-[-0.14px] whitespace-nowrap"
          >
            07123 456 789
          </a>

          <div className="bg-[#fde0b5] flex items-center p-[6px] rounded-[1000px] text-[#000910]">
            <PhoneIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

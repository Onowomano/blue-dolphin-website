import Wordmark from "../assets/bd-banner.svg";

export default function Footer() {
  return (
    <div className="p-[6px] w-full shrink-0">
      <div className="bg-[var(--bg-accent-light-blue)] rounded-[8px] p-6 flex flex-col gap-[300px]">
        {/* Top footer content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services column */}
            <div className="flex-1 flex flex-col gap-[18px]">
              <p className="text-body-md-regular text-[var(--text-primary)]">
                Services
              </p>
              <div className="flex flex-col gap-2 text-body-md-regular text-[var(--text-primary)]">
                <p>Man &amp; Van</p>
                <p>House Moves</p>
                <p>Deliveries</p>
                <p>Pickups</p>
              </div>
            </div>

            {/* Contact column */}
            <div className="flex-1 flex flex-col gap-[18px]">
              <p className="text-body-md-regular text-[var(--text-primary)] tracking-[-0.14px]">
                Contact
              </p>
              <div className="flex flex-col gap-2 text-body-md-regular text-[var(--text-primary)]">
                <a
                  href="tel:+447982333351"
                  className="text-body-md-regular text-[var(--text-primary)] tracking-[-0.14px] whitespace-nowrap"
                >
                  0798 233 3351
                </a>
                <a
                  href="mailto:info@bluedolphinexpress.co.uk"
                  className="text-body-md-regular text-[var(--text-primary)] tracking-[-0.14px] whitespace-nowrap"
                >
                  info@bluedolphinexpress.co.uk
                </a>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>

          <p className="text-body-md-regular text-[var(--text-primary)]">
            2026 All rights reserved © Blue Dolphin Express
          </p>
        </div>

        {/* Big wordmark */}
        <img src={Wordmark} alt="Blue Dolphin Express" />
      </div>
    </div>
  );
}

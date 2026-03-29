import TopNav from "./components/TopNav";
import Button from "./components/Button";
import ServiceCard from "./components/ServiceCard";
import FAQItem from "./components/FAQItem";
import Footer from "./components/Footer";
import WhatsAppIcon from "./assets/whatsapp-logo.svg";

const heroImage = "/van-sky.png";

const manVanImage = "/man-carrying-van.png";
const roadsideImage = "/roadsign-blue.png";
const cartImage = "/shopping-cart.png";
const sofaImage = "/sofa-orange.png";
const tvImage = "/tv-tabletop.png";
const vanImage = "/van-blue.png";
const wasteBagImage = "/waste-bags.png";
const boxImage = "/box-brown.png";

const SERVICES = [
  {
    title: "Man & Van Moves",
    description: "Chat with us",
    image: vanImage,
    link: "https://wa.me/447982333351",
  },
  {
    title: "House & Flat Moves",
    description: "Chat with us",
    image: boxImage,
    link: "https://wa.me/447982333351",
  },
  {
    title: "Furniture Delivery",
    description: "Chat with us",
    image: sofaImage,
    link: "https://wa.me/447982333351",
  },
  {
    title: "Single Item Moves",
    description: "Chat with us",
     image: tvImage,
    link: "https://wa.me/447982333351",
  },
  {
    title: "Store & Marketplace Pickups",
    description: "Chat with us",
     image: cartImage,
    link: "https://wa.me/447982333351",
  },
  {
    title: "Short & Long Distance Moves",
    description: "Chat with us",
     image: roadsideImage,
    link: "https://wa.me/447982333351",
  },
  {
    title: "Disposals & Clearances",
    description: "Chat with us",
     image: wasteBagImage,
    link: "https://wa.me/447982333351",
  },
];

const FAQS = [
  {
    question: "How much does a move cost?",
    answer:
      "Pricing depends on the size of the move, distance, and time required. Contact us for a quick, free quote with no obligation.",
    defaultExpanded: true,
  },
  {
    question: "Do you offer same-day or last-minute bookings?",
    answer:
      "Yes, we do our best to accommodate same-day and urgent requests depending on availability.",
  },
  {
    question: "Are my items insured during the move?",
    answer:
      "We take every precaution to protect your belongings and handle all items with care. Contact us for details about coverage.",
  },
  {
    question: "Do you help with loading and unloading?",
    answer: "Yes, our team handles all the heavy lifting so you don't have to.",
  },
  {
    question: "Can you collect items from stores or sellers?",
    answer:
      "Absolutely. We regularly pick up items from shops, warehouses, and online marketplaces.",
  },
  {
    question: "Do I need to pack everything myself?",
    answer:
      "You can, but we can also assist with packing if needed—just let us know in advance.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We operate across the UK, handling both local and long-distance moves.",
  },
];

export default function Homepage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <TopNav />

      {/* ── Hero ────────────────────────────────────────────── */}
      <div id="home" className="p-[6px]">
        <div
          className="relative rounded-[8px] overflow-hidden h-svh flex flex-col items-center justify-start pt-[140px] lg:pt-[200px] px-4"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-[1024px] text-center">
            <div className="flex flex-col gap-2 text-white">
              <h1 className="text-heading-md lg:text-heading-lg text-white m-0">
                Moving made simple,
                <br />
                fast, and reliable.
              </h1>
              <p className="text-body-lg-regular text-white">
                From house moves to single items, we make
                <br />
                moving fast, simple, and stress-free.
              </p>
            </div>

            <Button
              label="0798 233 3351"
              hasLeftIcon
              leftIcon={
                <img
                  src={WhatsAppIcon}
                  alt="WhatsApp Logo"
                  className="h-5 w-auto"
                />
              }
              onClick={() =>
                window.open("https://wa.me/447982333351", "_blank")
              }
            />
          </div>
        </div>
      </div>

      {/* ── Our Services ────────────────────────────────────── */}
      <div id="services" className="w-full p-[6px] scroll-mt-[80px]">
        <div className="w-full relative rounded-[8px] overflow-hidden pt-[80px] pb-[32px] px-2 lg:px-[100px]" style={{ backgroundColor: '#6e5e4c' }}>
          {/* Background image — absolutely positioned, always fills container */}
          <img
            src={manVanImage}
            alt=""
            aria-hidden="true"
            className="absolute left-0 min-w-full h-auto opacity-80 pointer-events-none -top-[0px] md:-top-[200px] lg:-top-[300px] xl:-top-[600px]"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[50%] to-[#6e5e4c] pointer-events-none" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-[200px] lg:gap-[440px]">
            {/* Section heading */}
            <h2 className="text-heading-md lg:text-heading-lg text-[#00263f] text-center m-0">
              Our Services
            </h2>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {/* Row 1 — 2 cards */}
              <div className="flex flex-col lg:flex-row gap-4">
                {SERVICES.slice(0, 2).map((s) => (
                  <ServiceCard key={s.title} title={s.title} description={s.description} link={s.link}>
                    {s.image && (
                      <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                    )}
                  </ServiceCard>
                ))}
              </div>

              {/* Row 2 — 3 cards */}
              <div className="flex flex-col lg:flex-row gap-4">
                {SERVICES.slice(2, 5).map((s) => (
                  <ServiceCard key={s.title} title={s.title} description={s.description} link={s.link}>
                    {s.image && (
                      <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                    )}
                  </ServiceCard>
                ))}
              </div>

              {/* Row 3 — 2 cards */}
              <div className="flex flex-col lg:flex-row gap-4">
                {SERVICES.slice(5, 7).map((s) => (
                  <ServiceCard key={s.title} title={s.title} description={s.description} link={s.link}>
                    {s.image && (
                      <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                    )}
                  </ServiceCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ─────────────────────────────────────────────── */}

      <div
        id="faqs"
        className="scroll-mt-[80px] flex items-center justify-center py-[100px] px-6 bg-[var(--bg-primary)]"
      >
        <div className="flex flex-col gap-16 w-full max-w-[600px]">
          <div className="flex flex-col gap-8">
            <h2 className="text-heading-md text-[var(--text-primary)] text-center m-0">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col">
              {FAQS.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultExpanded={faq.defaultExpanded}
                />
              ))}
            </div>
          </div>

          <p className="text-body-lg-bold text-[var(--text-primary)] text-center">
            Have more questions?{" "}
            <a
              href="https://wa.me/447123456789"
              className="text-[var(--text-link)] underline decoration-dotted underline-offset-4 "
            >
              Chat with us
            </a>
          </p>
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────── */}
      <div id="footer" className="scroll-mt-[80px]">
        <Footer />
      </div>
    </div>
  );
}

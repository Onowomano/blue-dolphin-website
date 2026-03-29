import TopNav from './components/TopNav'
import Button from './components/Button'
import ServiceCard from './components/ServiceCard'
import FAQItem from './components/FAQItem'
import Footer from './components/Footer'
import WhatsAppIcon from './assets/whatsapp-logo.svg'

// Figma asset URLs — valid for ~7 days from generation. Replace with your own hosted assets.
const heroImage = '/van-sky.png'
const servicesImage = '/van-front.png'
const manVanImage = '/man-carrying-van.png'

const SERVICES = [
  {
    title: 'Man & Van Moves',
    description:
      'Flexible and cost-effective moving service for small moves, student relocations, or quick transport jobs.',
    image: servicesImage,
  },
  {
    title: 'House & Flat Moves',
    description:
      'Full moving service for homes of all sizes. We handle packing, loading, transport, and unloading with care.',
  },
  {
    title: 'Furniture Delivery',
    description:
      "Bought furniture? We'll collect and deliver it safely to your home, ready for use.",
  },
  {
    title: 'Single Item Moves',
    description:
      "Need just one item moved? From sofas to appliances, we've got you covered.",
  },
  {
    title: 'Store & Marketplace Pickups',
    description:
      'We collect items from IKEA, Facebook Marketplace, Gumtree, and more—saving you time and hassle.',
  },
  {
    title: 'Short & Long Distance Moves',
    description:
      'Moving across town or across the UK, we provide reliable transport wherever you need to go.',
  },
  {
    title: 'Disposals & Clearances',
    description:
      'Responsible removal and disposal of unwanted items, furniture, or household waste.',
  },
]

const FAQS = [
  {
    question: 'How much does a move cost?',
    answer:
      'Pricing depends on the size of the move, distance, and time required. Contact us for a quick, free quote with no obligation.',
    defaultExpanded: true,
  },
  {
    question: 'Do you offer same-day or last-minute bookings?',
    answer:
      'Yes, we do our best to accommodate same-day and urgent requests depending on availability.',
  },
  {
    question: 'Are my items insured during the move?',
    answer:
      'We take every precaution to protect your belongings and handle all items with care. Contact us for details about coverage.',
  },
  {
    question: 'Do you help with loading and unloading?',
    answer: "Yes, our team handles all the heavy lifting so you don't have to.",
  },
  {
    question: 'Can you collect items from stores or sellers?',
    answer:
      'Absolutely. We regularly pick up items from shops, warehouses, and online marketplaces.',
  },
  {
    question: 'Do I need to pack everything myself?',
    answer:
      "You can, but we can also assist with packing if needed—just let us know in advance.",
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We operate across the UK, handling both local and long-distance moves.',
  },
]

export default function Homepage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <TopNav />

      {/* ── Hero ────────────────────────────────────────────── */}
      <div id="home" className="p-[6px]">
        <div className="relative rounded-[8px] overflow-hidden h-svh flex flex-col items-center justify-start pt-[200px] lg:pt-[220px] px-4">
          {/* Background image */}
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 top-[-50px] h-[calc(100%+50px)] object-cover object-center pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-[1024px] text-center">
            <div className="flex flex-col gap-2 text-white">
              <h1
                className="text-heading-md lg:text-heading-lg text-white m-0"
              >
                Moving made simple,<br />fast, and reliable.
              </h1>
              <p className="text-body-lg-regular text-white">
                From house moves to single items, we make<br />
                moving fast, simple, and stress-free.
              </p>
            </div>

            <Button
              label="0798 233 3351"
              hasLeftIcon
              leftIcon={<img src={WhatsAppIcon} alt="WhatsApp Logo" className="h-5 w-auto" />}
              onClick={() => window.open('https://wa.me/447123456789', '_blank')}
            />
          </div>
        </div>
      </div>

      {/* ── Our Services ────────────────────────────────────── */}
      <div id="services" className="p-[6px] scroll-mt-[80px]">
        <div className="relative bg-[#6e5e4c] rounded-[8px] overflow-hidden pt-[80px] pb-[32px] px-2 lg:px-[100px]">
          {/* Background image + gradient */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <img
              src={manVanImage}
              alt=""
              className="absolute left-0 w-full h-[calc(100%-1000px)] object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[50%] to-[#6e5e4c]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-[480px]">
            {/* Section heading */}
            <h2 className="text-heading-md lg:text-heading-lg text-[#00263f] text-center m-0">
              Our Services
            </h2>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {/* Row 1 — 2 cards */}
              <div className="flex flex-col lg:flex-row gap-4">
                <ServiceCard title={SERVICES[0].title} description={SERVICES[0].description}>
                  <img
                    src={SERVICES[0].image}
                    alt="Man and van"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </ServiceCard>
                <ServiceCard title={SERVICES[1].title} description={SERVICES[1].description} />
              </div>

              {/* Row 2 — 3 cards */}
              <div className="flex flex-col lg:flex-row gap-4">
                {SERVICES.slice(2, 5).map((s) => (
                  <ServiceCard key={s.title} title={s.title} description={s.description} />
                ))}
              </div>

              {/* Row 3 — 2 cards */}
              <div className="flex flex-col lg:flex-row gap-4">
                {SERVICES.slice(5, 7).map((s) => (
                  <ServiceCard key={s.title} title={s.title} description={s.description} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      
      <div id="faqs" className="scroll-mt-[80px] flex items-center justify-center py-[100px] px-6 bg-white">
        <div className="flex flex-col gap-16 w-full max-w-[600px]">
          <div className="flex flex-col gap-8">
            <h2 className="text-heading-md text-[#00263f] text-center m-0">
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

          <p className="text-body-lg-bold text-[#000910] text-center">
            Have more questions?{' '}
            <a href="https://wa.me/447123456789" className="text-[#337eb1] underline decoration-dotted underline-offset-4 ">
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
  )
}

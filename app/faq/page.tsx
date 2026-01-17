import { Accordion, AccordionItem } from "@/components/ui/accordion"

// Mock FAQ data - replace with actual data fetching
const faqData = [
  {
    question: "How does the App Work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi leo velit sem malesuada suspendisse maecenas. Tincidunt tempus amet tempor eu. Blandit in id tortor et ultricies. In sit massa sed elementum cras viverra fermentum iaculis volutpat.",
    defaultOpen: true,
  },
  {
    question: "How does the App Work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi leo velit sem malesuada suspendisse maecenas. Tincidunt tempus amet tempor eu. Blandit in id tortor et ultricies. In sit massa sed elementum cras viverra fermentum iaculis volutpat.",
    defaultOpen: true,
  },
  {
    question: "How does the App Work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi leo velit sem malesuada suspendisse maecenas. Tincidunt tempus amet tempor eu. Blandit in id tortor et ultricies. In sit massa sed elementum cras viverra fermentum iaculis volutpat.",
    defaultOpen: true,
  },
  {
    question: "How does the App Work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Mi leo velit sem malesuada suspendisse maecenas. Tincidunt tempus amet tempor eu. Blandit in id tortor et ultricies. In sit massa sed elementum cras viverra fermentum iaculis volutpat.",
    defaultOpen: false,
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative bg-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-linear-to-b from-primary/90 to-primary bg-cover bg-center bg-[url('/images/realtor_banner.jpg')]">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Accordion>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={faq.defaultOpen}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

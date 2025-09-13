import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How do I book a trip?",
    answer:
      "You can book a trip directly from our Organized Trips section by selecting your preferred itinerary and completing the booking form.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes! We offer flexible packages. You can contact our travel experts to adjust the itinerary according to your preferences.",
  },
  {
    question: "What is the payment process?",
    answer:
      "Payments are processed securely through our platform. You can pay via credit/debit card or approved online payment methods.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: Heading + Subheading */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base">
            Here are some of the most common questions our travelers ask. Click on a question to see the answer.
          </p>
        </div>

        {/* Right column: FAQ dropdowns */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

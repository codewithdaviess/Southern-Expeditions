import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left text-lg items-center focus:outline-none"
      >
        <span className="text-gray-800 font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Answer */}
      {isOpen && (
        <p className="mt-4 text-gray-600 text-lgs transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
}

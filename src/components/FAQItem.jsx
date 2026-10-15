import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        className="w-full text-left flex justify-between items-center text-white font-medium"
      >
        {question}
        <span className="text-primary">{open ? "-" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            id={answerId}
            role="region"
            aria-label={question}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 mt-3"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

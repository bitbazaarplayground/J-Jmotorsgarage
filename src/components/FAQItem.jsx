import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-white font-medium"
      >
        {question}
        <span className="text-primary">{open ? "-" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
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

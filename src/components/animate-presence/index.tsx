import { AnimatePresence, motion } from "framer-motion"
import type { ReactNode } from "react"

export function PresentationSection({ children, key }: { children: ReactNode, key: string }) {
    return (
    <AnimatePresence mode="wait">
        <motion.div
        key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full h-full flex items-center justify-center p-8 md:p-16"
        >
          {children}
        </motion.div>
    </AnimatePresence>
    )
}
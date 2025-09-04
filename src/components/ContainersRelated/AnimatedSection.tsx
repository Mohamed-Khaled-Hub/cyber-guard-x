'use client'

import { motion } from 'framer-motion'
// Types
import { AnimatedSectionProps } from '@/src/types/propsTypes'

export default function AnimatedSection({
    children,
    className,
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

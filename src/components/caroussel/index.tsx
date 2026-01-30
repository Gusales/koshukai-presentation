import { AnimatePresence, motion, type Variants } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface TimelineCarouselProps {
    images: string[]
    itemId: string
    itemTitle: string
}

export const TimeLineCarousel = ({ images, itemId, itemTitle }: TimelineCarouselProps) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0)
    const [carouselDirection, setCarouselDirection] = useState<number>(1)

    const slideVariants: Variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        }),
    }

    const nextSlide = () => {
        setCarouselDirection(1)
        setCarouselIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCarouselDirection(-1)
        setCarouselIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const setSlide = (slide: number) => {
        setCarouselDirection(carouselIndex <= slide ? 1 : -1)
        setCarouselIndex(slide)
    }

    if (!images || images.length === 0) return null

    return (
        <div className="relative h-48 md:h-64 overflow-hidden rounded-md ring-4 ring-[#d4af37]/20">
            <AnimatePresence initial={false} custom={carouselDirection}>
                <motion.div
                    key={`${itemId}-slide-${carouselIndex}`}
                    custom={carouselDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={images[carouselIndex]}
                        alt={`${itemTitle} ${carouselIndex + 1}`}
                        className="w-full h-full object-cover box-border"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Previous button */}
            <button
                aria-label="Previous image"
                onClick={prevSlide}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/45 text-white rounded-full p-2 shadow hover:bg-black/60 transition-colors"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next button */}
            <button
                aria-label="Next image"
                onClick={nextSlide}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/45 text-white rounded-full p-2 shadow hover:bg-black/60 transition-colors"
            >
                <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            carouselIndex === i ? 'bg-[#c62828]' : 'bg-[#e8e7e4]'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
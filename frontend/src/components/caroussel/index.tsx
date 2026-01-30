import { AnimatePresence, motion, type Variants } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useMemo, useState } from "react"

interface TimelineCarouselProps {
  images: string[]
  itemId: string
  itemTitle: string
}

export const TimeLineCarousel = ({ images, itemId, itemTitle }: TimelineCarouselProps) => {
  const safeImages = useMemo(
    () => (images ?? []).filter((src) => typeof src === "string" && src.trim().length > 0),
    [images]
  )

  const [carouselIndex, setCarouselIndex] = useState<number>(0)
  const [carouselDirection, setCarouselDirection] = useState<number>(1)

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  }

  const stopBubbling = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation()
  }, [])

  const stopLinkAndBubbling = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const nextSlide = useCallback(() => {
    setCarouselDirection(1)
    setCarouselIndex((prev) => (prev + 1) % safeImages.length)
  }, [safeImages.length])

  const prevSlide = useCallback(() => {
    setCarouselDirection(-1)
    setCarouselIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length)
  }, [safeImages.length])

  const setSlide = useCallback(
    (slide: number) => {
      setCarouselDirection(carouselIndex <= slide ? 1 : -1)
      setCarouselIndex(slide)
    },
    [carouselIndex]
  )

  useEffect(() => {
    if (safeImages.length <= 1) return

    const interval = setInterval(() => {
      setCarouselDirection(1)
      setCarouselIndex((prev) => (prev + 1) % safeImages.length)
    }, 2500) // <-- tempo aqui

    return () => clearInterval(interval)
  }, [safeImages.length])

  if (!safeImages || safeImages.length === 0) return null

  return (
    <div
      className="relative h-48 md:h-64 overflow-hidden rounded-md ring-4 ring-[#d4af37]/20"
      onClickCapture={stopBubbling}
      onMouseDownCapture={stopBubbling}
      onTouchStartCapture={stopBubbling}
      onPointerDownCapture={stopBubbling}
    >
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
            src={safeImages[carouselIndex]}
            alt={`${itemTitle} ${carouselIndex + 1}`}
            className="w-full h-full object-cover box-border"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </motion.div>
      </AnimatePresence>

      {/* Previous button */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          stopLinkAndBubbling(e)
          prevSlide()
        }}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/45 text-white rounded-full p-2 shadow hover:bg-black/60 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Next button */}
      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          stopLinkAndBubbling(e)
          nextSlide()
        }}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/45 text-white rounded-full p-2 shadow hover:bg-black/60 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {safeImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              stopLinkAndBubbling(e)
              setSlide(i)
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              carouselIndex === i ? "bg-[#c62828]" : "bg-[#e8e7e4]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

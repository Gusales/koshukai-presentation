import { motion } from 'framer-motion';

export interface KoiBackgroundProps {
  opacity?: number;
}

export function KoiBackground() {
  const koiFish = [
    { id: 1, delay: 0, x: 10, size: 'w-16 h-16', color: 'text-[#c62828]' },
    { id: 2, delay: 2, x: 70, size: 'w-12 h-12', color: 'text-[#d4af37]' },
    { id: 3, delay: 4, x: 40, size: 'w-14 h-14', color: 'text-[#c62828]/70' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-50 overflow-hidden">
      {koiFish.map((fish) => (
        <motion.div
          key={fish.id}
          className={`absolute ${fish.size} ${fish.color} opacity-30`}
          initial={{ x: '-100%', y: 100 }}
          animate={{
            x: ['0%', '100vw'],
            y: [
              fish.id * 20,
              fish.id * 20 - 30,
              fish.id * 20 + 20,
              fish.id * 20 - 10,
              fish.id * 20,
            ],
          }}
          transition={{
            duration: 25 + fish.id * 5,
            delay: fish.delay,
            repeat: Infinity,
            ease: 'linear',
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          style={{ left: `${fish.x}%` }}
        >
          {/* Corpo do peixe koi simplificado em SVG */}
          <svg
            viewBox="0 0 100 60"
            fill="currentColor"
            className="w-full h-full"
          >
            {/* Corpo */}
            <ellipse cx="50" cy="30" rx="40" ry="20" opacity="0.8" />
            {/* Cauda */}
            <path d="M 10 30 Q 0 20, 5 30 Q 0 40, 10 30 Z" opacity="0.7" />
            {/* Barbatanas */}
            <ellipse cx="45" cy="45" rx="8" ry="12" opacity="0.6" />
            <ellipse cx="55" cy="45" rx="8" ry="12" opacity="0.6" />
            {/* Detalhe da cabeça */}
            <circle cx="75" cy="28" r="3" fill="#1a1a1a" opacity="0.9" />
            {/* Padrões decorativos */}
            <ellipse cx="60" cy="30" rx="10" ry="8" opacity="0.4" fill="#fff" />
            <ellipse cx="40" cy="28" rx="8" ry="6" opacity="0.4" fill="#fff" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

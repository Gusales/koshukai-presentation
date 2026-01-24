import { motion } from 'framer-motion';
import { KoiSvg } from './koi-svg';

export interface KoiBackgroundProps {
  opacity?: number;
}

export function KoiBackground({ opacity = 0.15 }: KoiBackgroundProps) {
  const koiFish = [
    { 
      id: 1, 
      delay: 0, 
      duration: 25, 
      color: '#c62828',
      startX: -100,
      endX: window.innerWidth + 100,
      y: '20%',
    },
    { 
      id: 2, 
      delay: 8, 
      duration: 30, 
      color: '#ff6f00',
      startX: window.innerWidth + 100,
      endX: -100,
      y: '60%',
    },
    { 
      id: 3, 
      delay: 15, 
      duration: 28, 
      color: '#fafafa',
      startX: -100,
      endX: window.innerWidth + 100,
      y: '80%',
    },
  ];

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ opacity }}
    >
      {koiFish.map((fish) => (
        <motion.div
          key={fish.id}
          initial={{ x: fish.startX, y: fish.y }}
          animate={{ 
            x: fish.endX,
            y: [fish.y, `calc(${fish.y} - 30px)`, `calc(${fish.y} + 20px)`, fish.y],
          }}
          transition={{
            x: {
              duration: fish.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: fish.delay,
            },
            y: {
              duration: fish.duration / 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: fish.delay,
            },
          }}
          className="absolute"
        >
          <KoiSvg color={fish.color} />
        </motion.div>
      ))}
    </div>
  );
}
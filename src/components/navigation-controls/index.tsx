import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Steps } from '../../contants';
import { useStep } from '../../contexts/step-context';

export function NavigationControls() {
  const { step, nextStep, previousStep } = useStep();
  const { t } = useTranslation()

  const currentIndex = Steps.indexOf(step);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < Steps.length - 1;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Botão Anterior */}
      <motion.button
        onClick={previousStep}
        disabled={!hasPrevious}
        className={`flex items-center gap-2 px-4 py-3 rounded-md shadow-lg transition-all duration-200 cursor-pointer ${
          hasPrevious
            ? 'bg-white text-[#1a1a1a] hover:bg-[#e8e7e4]'
            : 'bg-white/50 text-[#9e9e9e] cursor-not-allowed'
        }`}
        whileHover={hasPrevious ? { scale: 1.05 } : {}}
        whileTap={hasPrevious ? { scale: 0.95 } : {}}
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm hidden sm:inline">
          { t('navigation.previous') }
        </span>
      </motion.button>

      {/* Indicador de Progresso */}
      <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-md shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6e6e6e]">
            {currentIndex + 1} / {Steps.length}
          </span>
          <div className="w-24 h-1 bg-[#e8e7e4] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#c62828]"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / Steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Botão Próximo */}
      <motion.button
        onClick={nextStep}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-4 py-3 rounded-md shadow-lg transition-all duration-200 cursor-pointer ${
          hasNext
            ? 'bg-[#c62828] text-white hover:bg-[#d32f2f]'
            : 'bg-white/50 text-[#9e9e9e] cursor-not-allowed'
        }`}
        whileHover={hasNext ? { scale: 1.05 } : {}}
        whileTap={hasNext ? { scale: 0.95 } : {}}
      >
        <span className="text-sm hidden sm:inline">
          { t('navigation.next') }
        </span>
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
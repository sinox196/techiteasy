import { motion } from 'framer-motion';
import { type ReactNode, useRef, useState } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <motion.button onClick={onClick} whileTap={{ scale: 0.96 }} className={className}>
        <motion.span
          animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
          transition={{ type: 'spring', stiffness: 150, damping: 12 }}
          className="inline-flex items-center gap-2"
        >
          {children}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

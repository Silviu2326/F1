import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

interface BudgetProgressProps {
  total: number;
  used: number;
  maxBudget: number;
}

const BudgetProgress: React.FC<BudgetProgressProps> = ({ total, used, maxBudget }) => {
  const percentage = (used / maxBudget) * 100;
  const remaining = maxBudget - used;

  return (
    <div className="bg-gray-900 rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#e10600] rounded-full p-2">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Presupuesto</h3>
            <p className="text-gray-400">Restante: {remaining.toLocaleString()}M €</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-white">{used.toLocaleString()}M €</span>
          <p className="text-gray-400">de {maxBudget.toLocaleString()}M €</p>
        </div>
      </div>

      <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#e10600]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {percentage > 90 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-yellow-400 text-sm"
        >
          ¡Atención! Te queda poco presupuesto disponible
        </motion.p>
      )}
    </div>
  );
};

export default BudgetProgress;

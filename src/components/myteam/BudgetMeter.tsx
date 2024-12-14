import React from 'react';
import { DollarSign } from 'lucide-react';

interface BudgetMeterProps {
  budget: number;
  used: number;
  maxBudget: number;
}

const BudgetMeter = ({ budget, used, maxBudget }: BudgetMeterProps) => {
  const percentage = (used / maxBudget) * 100;
  const remaining = budget - used;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <DollarSign className="w-6 h-6 text-[#e10600]" />
          <h3 className="text-xl font-bold">Presupuesto</h3>
        </div>
        <div className="text-right">
          <p className={`text-2xl font-bold ${remaining < 0 ? 'text-red-600' : 'text-green-600'}`}>
            ${remaining.toFixed(1)}M
          </p>
          <p className="text-sm text-gray-500">Disponible</p>
        </div>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-gray-600">
              {percentage.toFixed(1)}% Utilizado
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-600">
              ${maxBudget}M Total
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${Math.min(percentage, 100)}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
              percentage > 100 ? 'bg-red-500' : 'bg-[#e10600]'
            }`}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <p>Presupuesto Total:</p>
          <p className="font-semibold">${maxBudget}M</p>
        </div>
        <div className="text-right">
          <p>Utilizado:</p>
          <p className="font-semibold">${used.toFixed(1)}M</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetMeter;
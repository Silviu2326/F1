import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { StandingsSort } from '../../types';

interface SortHeaderProps {
  label: string;
  field: StandingsSort['field'];
  currentSort: StandingsSort;
  onSort: (field: StandingsSort['field']) => void;
}

const SortHeader: React.FC<SortHeaderProps> = ({
  label,
  field,
  currentSort,
  onSort,
}) => {
  const isActive = currentSort.field === field;

  return (
    <button
      onClick={() => onSort(field)}
      className={`flex items-center gap-1 hover:text-gray-700 ${
        isActive ? 'text-gray-900 font-semibold' : 'text-gray-500'
      }`}
      aria-label={`Ordenar por ${label}`}
    >
      <span>{label}</span>
      <ArrowUpDown className="w-4 h-4" />
    </button>
  );
};

export default SortHeader;

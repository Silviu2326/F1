import React from 'react';

interface PerformanceChartProps {
  data: number[];
  maxValue: number;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, maxValue }) => {
  return (
    <div className="flex items-end gap-1 h-8">
      {data.map((value, index) => {
        const height = (value / maxValue) * 100;
        return (
          <div
            key={index}
            className="w-2 bg-red-500 rounded-t"
            style={{ height: `${height}%` }}
            title={`Carrera ${index + 1}: ${value} puntos`}
          />
        );
      })}
    </div>
  );
};

export default PerformanceChart;

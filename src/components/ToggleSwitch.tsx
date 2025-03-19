
import React from 'react';
import { cn } from '@/lib/utils';

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
  description?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  enabled, 
  onChange, 
  label, 
  description
}) => {
  return (
    <div className="flex items-center justify-between">
      {(label || description) && (
        <div>
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
        </div>
      )}
      <button
        type="button"
        className={cn(
          "toggle-switch",
          enabled ? "bg-brand-blue" : "bg-gray-200"
        )}
        onClick={() => onChange(!enabled)}
        aria-pressed={enabled}
      >
        <span className="sr-only">Toggle</span>
        <span
          className={cn(
            "toggle-switch-thumb",
            enabled ? "translate-x-5" : "translate-x-1"
          )}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;

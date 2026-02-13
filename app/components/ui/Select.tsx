import { cn } from "~/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({ label, error, options, placeholder, className, id, ...props }: SelectProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-heading font-semibold text-surface-700">
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn(
          "w-full px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-800",
          "focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500",
          "transition-all duration-200",
          error && "border-red-400 focus:ring-red-500/30 focus:border-red-500",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

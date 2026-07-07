import type { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-gray-200 px-6 py-16 text-center">
      {icon && <div className="text-gray-300">{icon}</div>}
      <div className="space-y-1.5">
        <h2 className="text-lg font-semibold text-ink-950">{title}</h2>
        {description && (
          <p className="mx-auto max-w-sm text-sm text-gray-500">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

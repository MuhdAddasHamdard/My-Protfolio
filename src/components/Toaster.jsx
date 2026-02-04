"use client";

import { useToast } from "../hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="
            w-80 rounded-lg shadow-lg
            bg-white dark:bg-neutral-900
            border border-black/10 dark:border-white/10
            p-4
          "
        >
          <p className="font-semibold">{toast.title}</p>
          {toast.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {toast.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

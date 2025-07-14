'use client';

import { X } from 'lucide-react';

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <X size={20} />
        </button>
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-slate-50">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-primary-200 animate-ping opacity-35" />
        <div className="w-16 h-16 rounded-full border-4 border-t-primary-600 border-primary-100 animate-spin" />
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
        Mayo Dental Center...
      </p>
    </div>
  );
}


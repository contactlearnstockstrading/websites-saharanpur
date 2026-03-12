"use client";

interface Props {
  label?: string;
  aspectRatio?: string;
  className?: string;
  icon?: string;
}

export default function ImagePlaceholder({
  label = "Add Your Photo Here",
  aspectRatio = "16/9",
  className = "",
  icon = "📷",
}: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-sm text-gray-400 font-body text-center px-4">
        {label}
      </span>
    </div>
  );
}

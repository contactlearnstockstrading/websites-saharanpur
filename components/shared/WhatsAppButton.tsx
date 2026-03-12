"use client";

import { MessageCircle } from "lucide-react";

interface Props {
  href: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function WhatsAppButton({
  href,
  label = "WhatsApp Us",
  className = "",
  size = "md",
}: Props) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center font-body font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
}

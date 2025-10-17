"use client";

import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "danger";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function Button({
  label,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "w-full py-2 px-4 cursor-pointer rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-blue-400 hover:bg-blue-700 text-white focus:ring-blue-200",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-black focus:ring-gray-400",
    danger:
      "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
}

"use client";

import React from "react";

interface InputFieldProps {
  type?: string;
  placeholder: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "primary" | "danger"; 
}

export default function InputField({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  variant = "primary", // default variant
}: InputFieldProps) {
  // Determine classes based on variant
  const baseClasses =
    "w-full p-2 mb-3 rounded-lg border outline-none focus:ring-2";
  const variantClasses =
    variant === "danger"
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-400 focus:ring-gray-200"; // primary by default

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={`${baseClasses} ${variantClasses}`}
    />
  );
}

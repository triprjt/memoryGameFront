import React from "react";

// Define the props type
interface ButtonProps {
  label: string; // The button's label text
  onClick?: () => void; // Optional click event handler
  type?: "button" | "submit" | "reset"; // Button type
  variant?: "primary" | "secondary" | "danger"; // Styling variant
  size?: "small" | "medium" | "large"; // Button size
  disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  // Define styles for button variants
  const variantStyles: Record<string, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // Define styles for button sizes
  const sizeStyles: Record<string, string> = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  // Combine base, size, and variant styles
  const baseStyle =
    "rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring";
  const disabledStyle = "bg-gray-300 text-gray-500 cursor-not-allowed";
  const combinedStyle = `${baseStyle} ${sizeStyles[size]} ${
    disabled ? disabledStyle : variantStyles[variant]
  }`;

  return (
    <button
      type={type}
      className={combinedStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

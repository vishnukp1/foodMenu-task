import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 mx-3 my-1  border border-gray-300 ${className} custom-button`}
    >
      {children}
    </button>
  );
};

export default Button;

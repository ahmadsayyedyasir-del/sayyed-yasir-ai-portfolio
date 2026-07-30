import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="
      group
      relative
      overflow-hidden
      rounded-full
      border
      border-cyan-400/40
      bg-cyan-400
      px-8
      py-4
      font-semibold
      text-black
      transition-all
      duration-500
      hover:scale-105
      hover:shadow-[0_0_60px_rgba(0,229,255,.45)]
      "
    >
      {children}
    </button>
  );
};

export default Button;
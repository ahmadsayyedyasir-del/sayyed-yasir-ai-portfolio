import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

const MagneticButton = ({
  children,
  className = "",
  as = "button",
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const Tag = as;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="inline-block"
    >
      <Tag className={className} {...(props as Record<string, unknown>)}>
        {children}
      </Tag>
    </motion.div>
  );
};

export default MagneticButton;
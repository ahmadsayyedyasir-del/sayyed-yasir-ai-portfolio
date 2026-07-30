type BlurLightProps = {
  color?: "cyan" | "purple";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-[300px] w-[300px] blur-[120px]",
  md: "h-[500px] w-[500px] blur-[150px]",
  lg: "h-[700px] w-[700px] blur-[180px]",
};

const colorMap = {
  cyan: "bg-cyan-500/10",
  purple: "bg-purple-500/10",
};

const BlurLight = ({
  color = "cyan",
  size = "md",
  className = "",
}: BlurLightProps) => {
  return (
    <div
      className={`pointer-events-none absolute ${sizeMap[size]} ${colorMap[color]} rounded-full ${className}`}
    />
  );
};

export default BlurLight;
type HeroBadgeProps = {
  text: string;
};

const HeroBadge = ({ text }: HeroBadgeProps) => {
  return (
    <div className="rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400">
      {text}
    </div>
  );
};

export default HeroBadge;
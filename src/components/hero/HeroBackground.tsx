const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
};

export default HeroBackground;
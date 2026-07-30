const GridBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      <div
        className="fixed inset-0 -z-40 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="fixed left-1/2 top-0 -z-30 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
    </>
  );
};

export default GridBackground;
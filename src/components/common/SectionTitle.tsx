type Props = {
  title: string;
  subtitle: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-20">
      <p className="mb-3 uppercase tracking-[0.4em] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
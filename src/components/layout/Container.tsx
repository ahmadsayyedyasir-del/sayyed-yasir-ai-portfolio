import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
      {children}
    </div>
  );
};

export default Container;
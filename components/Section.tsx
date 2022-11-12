import { FC, ReactNode } from "react";

interface ISection {
  children: ReactNode;
}

const Section: FC<ISection> = ({ children }) => {
  return (
    <section className={"px-10 max-w-screen-xl mx-auto flex items-center"}>
      {children}
    </section>
  );
};

export default Section;

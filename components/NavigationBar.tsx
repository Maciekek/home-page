import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav
      className={"sticky-top-0 h-16 flex justify-between items-center px-10"}
    >
      <span>
        <Link href={"/"}>Maciej kucharski</Link>
      </span>
      {/*<span>*/}
      {/*  <Link href={"/"}>About me</Link>*/}
      {/*</span>*/}
    </nav>
  );
};

export default NavigationBar;

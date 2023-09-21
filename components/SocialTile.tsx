import React, { ReactNode } from "react";
import { LinkedInIcon } from "./Icons";

const SocialTile = ({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`h-8 w-8 rounded-lg flex justify-center items-center cursor-pointer mt-1 ml-1 mr-1 pl-1 pr-1`}
    >
      <a href={url} target={"_blank"} rel="noreferrer">
        {children}
      </a>
    </div>
  );
};

export { SocialTile };

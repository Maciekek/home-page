import React, { useCallback, useEffect, useState } from "react";
import { SocialTile } from "./SocialTile";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const ProfileCard = () => {
  const [perspective, setPerspective] = useState({
    xHalf: 0,
    yHalf: 0,
    yStart: 0,
    xStart: 0,
  });

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      const x = event.clientX - (perspective.xHalf + perspective.xStart);
      const y = event.clientY - (perspective.yHalf + perspective.yStart);

      (
        document.querySelector(".profile")! as HTMLElement
      ).style.transform = `rotateY(${+x / 90}deg) rotateX(${+-y / 90}deg)`;

      (
        document.querySelector(".profile__border")! as HTMLElement
      ).style.transform = `translateX(${-x / 350}%) translateY(${-y / 350}%)`;
    },
    [perspective]
  );

  useEffect(() => {
    setPerspective({
      xHalf: window.innerWidth / 2,
      yHalf: window.innerHeight / 2,
      yStart: 0,
      xStart: 0,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className={"profile relative bg-white h-96 rounded-lg max-w-[500px]"}
      >
        <div className={"h-64 overflow-hidden rounded-t-lg"}>
          <img
            id={"user-image"}
            className={"rounded-lg object-contain mt-[-5%]"}
            src="/me.jpg"
            alt="This is my photo"
          />
        </div>
        <div className={"profile__border"} />
        <div className={"text-center mt-3 z-30 relative"}>
          <div className={"font-semibold  "}>Maciej Kucharski</div>
          <div>
            <a
              href="mailto:maciekek@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              maciekek@gmail.com
            </a>
          </div>
          <div className={"flex justify-center"}>
            <SocialTile url={"https://www.linkedin.com/in/maciekek/"}>
              <LinkedInIcon />
            </SocialTile>

            <SocialTile url={"https://github.com/maciekek"}>
              <GitHubIcon />
            </SocialTile>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileCard };

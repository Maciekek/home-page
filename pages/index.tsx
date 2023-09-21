import type { NextPage } from "next";
import Head from "next/head";
import Section from "../components/Section";
import { ProfileCard } from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Maciej's home page</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="I am a passionate Web Developer. I am eager to learn and explore new solutions in the IT world and I am always willing to share my knowledge and to have a conversation about programming and new technologies."
        />
      </Head>

      <main className={"pt-9"}>
        <Section>
          <div className={"lg:grid-cols-[1fr_2fr] grid gap-20 sm:grid-cols-1 "}>
            <ProfileCard />

            <div>
              <div className={"text-7xl font-medium pt-10 "}>Hi!</div>
              <div className={"text-2xl font-light py-10 "}>
                I am a passionate Web Developer. I am eager to learn and explore
                new solutions in the IT world and I am always willing to share
                my knowledge and to have a conversation about programming and
                new technologies.
              </div>

              <div className={"text-2xl max-w-prose font-light py-10 "}>
                Currently, I am working at SentiOne, where I am involved in the
                development of two products:{" "}
                <a
                  href="https://sentione.com/features/listen"
                  rel="noreferrer"
                  target={"_blank"}
                  className={"underline decoration-1"}
                >
                  Listen&React
                </a>{" "}
                and{" "}
                <a
                  className={"underline decoration-1"}
                  href="https://sentione.com/features/automate"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Automate
                </a>
                .
              </div>
              <div className={"text-2xl font-light py-10 "}>
                Feel free to contact me via email or connect with me on{" "}
                <a
                  className={"underline decoration-1"}
                  href="https://www.linkedin.com/in/maciekek/"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  LinkedIn
                </a>{" "}
                :)
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

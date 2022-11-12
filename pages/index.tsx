import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Section from "../components/Section";
import Image from "next/image";

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

        <meta name="description" content="Maciej's home page" />
      </Head>

      {/*<NavigationBar />*/}

      <main className={"pt-9"}>
        <Section>
          <div className={"lg:grid-cols-[1fr_2fr] grid gap-20 sm:grid-cols-1 "}>
            <Image
              className={"rounded-lg max-w-4xl"}
              src="/me.jpg"
              layout={"responsive"}
              alt="Hello, this is me!"
              height={"400px"}
              width={"400px"}
            />

            <div>
              <div className={"text-7xl font-medium pt-10 "}>Hi there!</div>
              <div className={"text-2xl font-light py-10 "}>
                I am a passionate Web Developer. I am eager to learn and explore
                new solutions in the IT world and I am always willing to share
                my knowledge and to have a conversation about programming and
                new technologies.
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

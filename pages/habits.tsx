import Head from "next/head";
import Hero from "../components/Habits/Hero";
import Navbar from "../components/Navbar";

export default function habits() {
  return (
    <>
    <Head>
    <title>OwnBoon - Explore Habits</title>
    <link rel="icon" href="/logo.png" />
    <meta
          name="description"
          content="Explore all about self improvement at one place"
        />
    </Head>
    <Navbar/>
    <div className="my-auto mx-auto">
      <Hero/>
    </div>
    </>
  )
}

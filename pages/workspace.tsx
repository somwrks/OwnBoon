import Head from "next/head";
import Navbar from "../components/Navbar";
import ParentHabit from "../components/Habits/ParentHabit";


export default function workspace() {
  return (
    <>
    <Head>
    <title>OwnBoon - Explore Workspace</title>
    <link rel="icon" href="/logo.png" />
    <meta
          name="description"
          content="Explore all about self improvement at one place"
        />
    </Head>
    <Navbar/>
    <div className="my-auto mx-auto">
      <ParentHabit/>
    </div>
    </>
  )
}

import Head from "next/head";
import Image from "next/image";
import Headers from "./../components/Headers";
import Nav from "./../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BTV </title>
        <link rel="shortcut icon" href="television.png" type="image/x-icon" />
      </Head>
      <Headers />
      <Nav />
    </div>
  );
}

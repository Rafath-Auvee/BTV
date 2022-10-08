import Head from "next/head";
import Image from "next/image";
import Headers from "./../components/Headers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BTV </title>
        <link rel="shortcut icon" href="television.png" type="image/x-icon" />
      </Head>
      
      <Headers />
    </div>
  );
}

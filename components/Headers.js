import btv from "./Assets/btv-logo.png";
import Image from "next/image";

function Headers() {
  return (
    <header>
      <Image src={btv} width={100} height={100} />
    </header>
  );
}

export default Headers;

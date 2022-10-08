import btv from "./Assets/btv-logo.png";
import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Headers() {
  return (
    <header>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <Image src={btv} width={100} height={100} />
        <div className="flex flex-grow justify-evenly max-w-2xl">
          {/* <HeaderItem title="HOME" Icon={HomeIcon} /> */}
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
      </header>
    </header>
  );
}

export default Headers;

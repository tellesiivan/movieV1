import Image from "next/image";
import {
  BiHomeSmile,
  BiUserCircle,
  BiTrendingUp,
  BiMessageSquareDots,
} from "react-icons/bi";
import HeadIcons from "./Helpers/HeadIcons";

export default function Header() {
  return (
    <header>
      <div className="flex items-center h-16 px-4 bg-slate-800 justify-between">
        <ul className="flex flex-row space-x-8">
          <HeadIcons icon={<BiHomeSmile />} title="Home" />
          <HeadIcons icon={<BiUserCircle />} title="Sign In" />
          <HeadIcons icon={<BiTrendingUp />} title="Trending" />
          <HeadIcons icon={<BiMessageSquareDots />} title="Help" />
        </ul>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
          alt="logo"
          height={25}
          width={60}
        />
      </div>
    </header>
  );
}

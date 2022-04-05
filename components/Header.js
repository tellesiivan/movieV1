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
      <div className="flex items-center h-16 px-4 bg-teal-900">
        <ul className="flex flex-row space-x-8">
          <HeadIcons icon={<BiHomeSmile />} title="Home" />
          <HeadIcons icon={<BiUserCircle />} title="Account" />
          <HeadIcons icon={<BiTrendingUp />} title="Trending" />
          <HeadIcons icon={<BiMessageSquareDots />} title="Help" />
        </ul>
      </div>
    </header>
  );
}

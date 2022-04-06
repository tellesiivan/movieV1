import { useRouter } from "next/router";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState, useEffect, useRef } from "react";
import request from "../utils/request";

export default function Navbar() {
  const router = useRouter();
  const navRef = useRef();
  const { type } = router.query;
  const [currentT, setCurrentT] = useState(type);
  const [navChanged, setNavChanged] = useState(false);

  useEffect(() => {
    setCurrentT(type);
  }, [type]);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 0) {
        setNavChanged(true);
      } else {
        setNavChanged(false);
      }
    },
    [],
    navRef
  );

  function classActive(key) {
    const check = key === currentT ? "bg-gray-200 text-black" : "";
    return check;
  }

  const breakdown = Object.entries(request).map(([key, { title }]) => (
    <h1
      key={key}
      className={`cursor-pointer text-xs text-slate-100 px-3 py-0.5 rounded-full ${classActive(
        key
      )} hover:bg-gray-700 ease-in duration-300`}
      onClick={() =>
        router.push({
          pathname: "/",
          query: { type: key },
        })
      }
    >
      {title}
    </h1>
  ));

  return (
    <div
      className={`px-4 py-2 border-b sticky top-0 z-50 ease-in duration-500 ${
        navChanged
          ? "bg-teal-300 border-teal-400"
          : "bg-gray-200 border-gray-200"
      }`}
      ref={navRef}
    >
      <div className="flex space-x-2 p-1 rounded-full bg-slate-900 max-w-fit">
        {breakdown}
      </div>
    </div>
  );
}

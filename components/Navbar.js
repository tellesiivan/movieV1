import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import request from "../utils/request";

export default function Navbar() {
  const router = useRouter();
  const { type } = router.query;
  const [currentT, setCurrentT] = useState(type);

  useEffect(() => {
    setCurrentT;
    type;
  }, [type]);

  function classActive(key) {
    const check = key === type ? "bg-gray-200 text-slate-900" : "";
    return check;
  }

  const breakdown = Object.entries(request).map(([key, { title }]) => (
    <h1
      key={key}
      className={`cursor-pointer text-xs text-slate-100 px-3 py-0.5 rounded-full ${classActive(
        key
      )} hover:bg-gray-200 hover:text-slate-900 ease-in duration-300`}
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
    <div className="px-4 py-2 bg-gray-200 border-b  ">
      <div className="flex space-x-1 p-1 rounded-full bg-slate-900 max-w-fit">
        {breakdown}
      </div>
    </div>
  );
}

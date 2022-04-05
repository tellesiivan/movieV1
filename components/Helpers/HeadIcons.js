import React from "react";

export default function HeadIcons({ icon, title }) {
  return (
    <li className="flex flex-col items-center transition-colors cursor-pointer text-slate-100 hover:text-teal-300">
      {icon}
      <p className="pt-1 text-xs">{title}</p>
    </li>
  );
}

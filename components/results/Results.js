import React from "react";
import { Suspense } from "react";
import Item from "./Item";

export default function Results({ results }) {
  console.log(results);

  return (
    <div className="mx-4 py-8">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-2  gap-y-2 sm:gap-x-4 sm:gap-y-4 sm:grid-cols-3 lg:grid-cols-4 "
      >
        {results.map((item) => (
          <Item result={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

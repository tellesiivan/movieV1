import Image from "next/image";

export default function Item({ result }) {
  const based_path = "https://image.tmdb.org/t/p/w500/";

  return (
    <li key={result.id} className="relative">
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden ">
        <Image
          src={`${based_path}${result.backdrop_path}`}
          alt={result.id}
          layout="responsive"
          height={70}
          width={140}
          className="object-cover pointer-events-none group-hover:opacity-75 group-hover:scale-110 ease-in duration-200 "
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">
            View details for {result.original_title}
          </span>
        </button>
      </div>
      <p className="mt-2 block text-sm font-medium text-slate-100 truncate pointer-events-none">
        {result.original_title ?? result.original_name}
      </p>
      <p className="block text-sm font-medium text-gray-500 pointer-events-none">
        {result.vote_average}
      </p>
    </li>
  );
}

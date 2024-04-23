import Link from "next/link";
import { CubeIcon } from "@heroicons/react/24/outline";

import { Routes } from "@/constants/routes";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      {Routes.slice(1).map((route) => (
        <div
          key={`module_${route.id}`}
          className="w-full sm:w-full md:w-1/3 mb-4 px-2"
        >
          <Link
            href={route.path}
            className="group block rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <div className="flex gap-2 items-center mb-3">
              <h2 className="text-2xl font-semibold">{route.label}</h2>
              <CubeIcon className="h-6 w-6" />
            </div>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {route.description}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { GlobeAmericasIcon } from "@heroicons/react/16/solid";

import { Routes } from "@/constants/routes";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <GlobeAmericasIcon className="h-11 w-11 text-blue-500" />

          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            <span className="text-blue-600 dark:text-blue-500">Survival </span>
            Nexus
          </span>
        </div>

        <div id="navbar-default" className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Routes.map((route) => (
              <li key={`route_${route.id}`}>
                <Link
                  href={route.path}
                  className={`block py-2 px-3 hover:text-blue-700 ${
                    isActive(route.path)
                      ? "text-blue-700"
                      : "text-gray-900 dark:text-gray-300"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button>
          <UserCircleIcon className="h-10 w-10 text-gray-300 hover:text-gray-500" />
        </button>
      </div>
    </nav>
  );
};

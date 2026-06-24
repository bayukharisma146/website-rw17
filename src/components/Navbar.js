"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Program", path: "/Program" },
    { name: "Galeri", path: "/Gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="w-full flex">
        {menu.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex-1 text-center py-4 relative transition-all duration-300
              ${
                isActive
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {item.name}

              {/* Underline indicator */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gray-800 transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

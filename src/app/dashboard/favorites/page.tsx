"use client";

import { useQuery } from "convex/react";
import { FileBrowser } from "../_components/file-browser";
import { api } from "../../../../convex/_generated/api";
import { useEffect, useState } from "react";
import { FileIcon, Menu, StarIcon, TrashIcon, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function FavoritesPage() {
  const [isClick, setIsClick] = useState(false);
  const toogleNavbar = (): void => {
    setIsClick(!isClick);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
  }, []);
  const theme =
    typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
  const pathname = usePathname();
  return (
    <div>
      <div className="md:hidden flex">
        <button
          className="inline-flex items-center justify-center rounded-md
          focus:outline-none"
          onClick={toogleNavbar}
        >
          {isClick ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
        </button>
      </div>
      {isClick && (
        <div
          className={`fixed left-0 top-0 h-screen w-64 ${
            theme === "dark" ? "bg-[#0F1723]" : "bg-[#f3f3f3]"
          } transition-transform transform z-50 md:hidden shadow-2xl`}
        >
          <button className="absolute top-4 right-4" onClick={toogleNavbar}>
            <X className="text-3xl" />
          </button>
          <ul className="mt-16">
            <li className="p-4 mr-2">
              <Link href="/dashboard/files">
                <Button
                  variant={"link"}
                  className={clsx("flex gap-2", {
                    "text-blue-500": pathname.includes("/dashboard/files"),
                  })}
                >
                  <FileIcon /> All Files
                </Button>
              </Link>
            </li>
            <li className="p-4 mr-2">
              <Link href="/dashboard/favorites">
                <Button
                  variant={"link"}
                  className={clsx("flex gap-2", {
                    "text-blue-500": pathname.includes("/dashboard/favorites"),
                  })}
                >
                  <StarIcon /> Favorites
                </Button>
              </Link>
            </li>
            <li className="p-4 mr-2">
              <Link href="/dashboard/trash">
                <Button
                  variant={"link"}
                  className={clsx("flex gap-2", {
                    "text-blue-500": pathname.includes("/dashboard/trash"),
                  })}
                >
                  <TrashIcon /> Trash
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <FileBrowser title="Favorites" favoritesOnly />
    </div>
  );
}

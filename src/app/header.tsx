"use client";

import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.css";
import { GanttChart, X } from "lucide-react";

export function Header() {
  const [header, setHeader] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
  }, []);
  const theme =
    typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;

  const toogleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div
      className={
        header
          ? `${
              theme === "dark" ? "bg-[#0F1723]" : "bg-[#f3f3f3]"
            } p-4 fixed w-[100%] border-b-20 border-black shadow-2xl z-30`
          : "bg-[transparent] p-4"
      }
    >
      <div className="items-center container mx-auto justify-between flex">
        <Link href="/" className="flex gap-2 items-center text-xl">
          <Image
            src="/assets/sync.png"
            alt="SyncSpace Logo"
            width={25}
            height={25}
            className=""
          />
          SyncSpace
        </Link>

        <div className="hidden md:block">
          <SignedIn>
            <Link href="/dashboard/files">
              <Button variant={"outline"}>Your Files</Button>
            </Link>
          </SignedIn>
        </div>

        <div className="flex gap-2">
          <div className="hidden md:block">
            <SignedIn>
              <Button className=" pb-1 bg-[#BADAF7] hover:bg-[#f9f9f9]">
                {" "}
                <OrganizationSwitcher>Create Space</OrganizationSwitcher>{" "}
              </Button>
            </SignedIn>
          </div>

          <div className="user">
            <UserButton />
          </div>

          <SignedOut>
            <SignInButton>
              <Button className="bg-[#4942E4] rounded-lg hover:bg-[#0C0960] text-white">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
        <div className="md:hidden absolute right-2 ml-3">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md
          focus:outline-none"
            onClick={toogleNavbar}
          >
            {isClick ? (
              <X className="text-3xl" />
            ) : (
              <GanttChart className="text-3xl" />
            )}
          </button>
        </div>
        {isClick && (
          <div
            className={`fixed right-0 top-0 h-screen w-64 ${
              theme === "dark" ? "bg-[#0F1723]" : "bg-[#f3f3f3]"
            } transition-transform transform z-50 md:hidden shadow-2xl`}
          >
            <button className="absolute top-4 right-4" onClick={toogleNavbar}>
              <X className="text-3xl" />
            </button>
            <ul className="mt-16">
              <li className="p-4 mr-2">
                <SignedIn>
                  <Button className=" pb-1 bg-[#BADAF7] hover:bg-[#f9f9f9]">
                    {" "}
                    <OrganizationSwitcher>
                      Create Space
                    </OrganizationSwitcher>{" "}
                  </Button>
                </SignedIn>
              </li>
              <li className="p-4">
                <SignedIn>
                  <Link href="/dashboard/files">
                    <Button variant={"outline"}>Your Files</Button>
                  </Link>
                </SignedIn>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

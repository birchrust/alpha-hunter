"use client";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./icons";
import { Button } from "react-aria-components";

function Header() {
  return (
    <header className="absolute z-10 h-14 w-full bg-background shadow backdrop-blur-sm">
      <div className="container flex h-full items-center justify-between">
        <Link href={"/"} className="flex  items-center gap-2">
          <Image src={"/letter-h.svg"} width={24} height={24} alt="logo" />
          <h1 className="font-bold">Alpha&nbsp;Hunter</h1>
        </Link>
        <nav className="flex items-center">
          <Button
            className={
              "flex items-center gap-2 rounded-full border px-2 py-1 shadow"
            }
          >
            <Icons.search className="h-4 w-4 fill-none stroke-current stroke-2" />
            <span className=" text-accent">Search</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export { Header };

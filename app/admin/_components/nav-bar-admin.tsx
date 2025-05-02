import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export const NavBarAdmin = () => {
    return (
      <nav>
        <nav className="max-w-full bg-black text-white mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-700">
          <h1 className="text-2xl font-bold">
            <Link href="/"> audiophile</Link>
          </h1>
          <div>
            <UserButton />
          </div>
        </nav>
      </nav>
    );
}
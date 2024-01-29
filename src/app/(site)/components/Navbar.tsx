import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className=" w-11/12 mx-auto p-10 flex justify-between items-center">
      <img src={"/images/ProPiy..svg"} alt="propiy" />

      <ul className="flex gap-6 items-center">
        <Link
          href={"/"}
          className="transition-all duration-300 hover:opacity-70"
        >
          Home
        </Link>
        <Link
          href={"/blog"}
          className="transition-all duration-300 hover:opacity-70"
        >
          Blogs
        </Link>
        <Link
          href={"/rules"}
          className="transition-all duration-300 hover:opacity-70"
        >
          Rules
        </Link>
        <Link
          href={"/faq"}
          className="transition-all duration-300 hover:opacity-70"
        >
          FAQ
        </Link>

        <Button className="text-[#E4622E] border border-[#E4622E] bg-white rounded-3xl transition-all duration-300 hover:text-white px-6">
          sign in / log in
        </Button>
      </ul>
    </nav>
  );
}

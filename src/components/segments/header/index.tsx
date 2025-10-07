import { Logo } from "@/components/logo";
import { SearchInput } from "@/components/search-input";
import Link from "next/link";
import { MobileNavbar } from "../navbar/mobile-navbar";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="grid max-sm:grid-cols-1 grid-cols-3 max-sm:px-4 px-6 py-4 items-center justify-between gap-2 bg-white">
      <div className="flex col-span-1 items-center max-sm:gap-4 gap-8 w-full">
        <Link href={"/"} className="flex items-center">
          <Logo height={30} width={30} />
          <h2 className="uppercase font-semibold ml-1.5 hidden md:inline-flex gap-1">
            Ngoc bich beauty
          </h2>
        </Link>
        <div className="max-sm:min-w-auto max-sm:w-full min-w-[25rem]">
          <SearchInput />
        </div>
        <div className="max-sm:block hidden">
          <MobileNavbar />
        </div>
      </div>
      <div className="flex items-center place-content-end col-span-2 gap-6 max-sm:hidden">
        <div className="text-sm">
          <Navigation />
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href="/login"
            className="flex items-center justify-center border-[1px] border-foreground h-11 w-28  rounded-tiny"
          >
            Đăng nhập
          </Link>
          <Link
            href="/sign-up"
            className="flex items-center justify-center h-11 w-28  rounded-tiny bg-foreground text-background"
          >
            Đăng ký
          </Link>
        </div>
        {/* <ToggleTheme /> */}
      </div>
    </header>
  );
};

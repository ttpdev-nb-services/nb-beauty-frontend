import { Copyright } from "./copyright";
import { Navigation } from "./navigation";
import { Social } from "@/components/social";
import { Logo } from "@/components/logo";
import { Slogan } from "@/components/slogan";
import { Separator } from "@/components/ui/separator";
import { Information } from "./information";
import { DesktopLayout } from "@/layouts/desktop-layout";
import { EmailSubscribe } from "@/features/dashboard/subscribes/components/email-subscribe";

export const Footer = () => {
  return (
    <div className="bg-foreground">
      <DesktopLayout className="px-4 max-sm:px-0">
        <footer className="flex flex-col py-6 max-sm:px-4">
          {/* Above */}
          <div className="flex max-sm:flex-col items-center gap-4 mb-9">
            <Logo height={40} width={40} />
            <Slogan />
          </div>
          <Information />
          <Separator className="opacity-50 my-9 bg-silver-base" />
          <div className="flex flex-col lg:flex-row max-sm:gap-10 gap-16 large-desktop:gap-32">
            <div className="flex-1">
              <Navigation />
            </div>
            <div className="flex-1">
              <div className="mb-9 w-full">
                <EmailSubscribe />
              </div>
              <div className="flex items-center justify-end">
                <div className="flex flex-col">
                  <div className="place-items-end mb-4">
                    <Social />
                  </div>
                  <div className="text-end">
                    <Copyright />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </DesktopLayout>
    </div>
  );
};

import { FooterDesktop } from "./FooterDesktop";
import { FooterMobile } from "./FooterMobile";
import { FooterTablet } from "./FooterTablet";

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 pb-6 pt-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1880px]">
        <FooterDesktop />
        <FooterTablet />
        <FooterMobile />
      </div>
    </footer>
  );
}

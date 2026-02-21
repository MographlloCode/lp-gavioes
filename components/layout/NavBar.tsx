"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  BiMenu,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoYoutube,
  BiSolidCartAlt,
  BiLogoTwitter,
} from "react-icons/bi";
import { NavDropdown } from "./NavDropdown";
import { NavLink } from "./NavLink";
import { NavMobileDrawer } from "./NavMobileDrawer";
import { navbarData } from "./navbarData";
import { getPhpLinkTargetProps } from "./linkUtils";

const { navItems } = navbarData;
const brandHref = "/";
const brandPhpLinkTargetProps = getPhpLinkTargetProps(brandHref);

export function NavBar() {
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdownId, setActiveMobileDropdownId] = useState<string | null>(null);
  const firstMobileDropdownId = navItems.find((item) => item.dropdown?.length)?.id ?? null;

  const activeDropdownContent = useMemo(
    () => navItems.find((item) => item.id === activeDropdownId)?.dropdown ?? [],
    [activeDropdownId]
  );

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <section
      className="relative flex items-center justify-between bg-black p-4 font-helvetica text-white"
      onMouseLeave={() => setActiveDropdownId(null)}
    >
      <Link
        href={brandHref}
        {...brandPhpLinkTargetProps}
        className="mt-1 font-helvetica-condensed text-xl leading-none font-black uppercase"
      >
        Gaviões da Fiel
      </Link>
      <div className="hidden items-center gap-4 lg:flex">
        <nav className="mt-1 flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              isActive={activeDropdownId === item.id}
              onMouseEnter={() =>
                setActiveDropdownId(item.dropdown?.length ? item.id : null)
              }
              onFocus={() =>
                setActiveDropdownId(item.dropdown?.length ? item.id : null)
              }
              onClick={() =>
                setActiveDropdownId((current) =>
                  item.dropdown?.length
                    ? current === item.id
                      ? null
                      : item.id
                    : null
                )
              }
            />
          ))}
        </nav>
        <span className="h-4 w-px bg-white" />
        <nav className="flex items-center gap-3">
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Youtube">
            <BiLogoYoutube />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
            <BiLogoInstagram />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
            <BiLogoTwitter />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
            <BiLogoFacebook />
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <nav className="hidden items-center gap-3 md:flex lg:hidden">
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Youtube">
            <BiLogoYoutube />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
            <BiLogoInstagram />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
            <BiLogoFacebook />
          </Link>
        </nav>
        <Link
          href="https://www.lojagavioes.com.br/"
          target="_blank"
          className="flex items-center gap-1 rounded-sm bg-zinc-900 px-4 py-2 text-sm"
        >
          <span className="mt-1 whitespace-nowrap font-helvetica-condensed font-bold tracking-wide">
            Loja
          </span>
          <BiSolidCartAlt />
        </Link>
        <button
          type="button"
          className="rounded-sm p-2 text-white lg:hidden"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => {
            setIsMobileMenuOpen((current) => !current);
            setActiveMobileDropdownId((current) => current ?? firstMobileDropdownId);
          }}
        >
          <BiMenu size={20} />
        </button>
      </div>

      <Link href={"https://www.lojagavioes.com.br/"} target="_blank" className="hidden items-center gap-1 px-4 py-2 text-sm lg:flex">
        <span className="mt-1 whitespace-nowrap font-helvetica-condensed font-bold tracking-wide">
          Loja Oficial
        </span>
        <BiSolidCartAlt />
      </Link>

      <NavDropdown
        content={activeDropdownContent}
        open={Boolean(activeDropdownId && activeDropdownContent.length)}
        onMouseLeave={() => setActiveDropdownId(null)}
      />

      <NavMobileDrawer
        open={isMobileMenuOpen}
        items={navItems}
        activeDropdownId={activeMobileDropdownId}
        onClose={() => setIsMobileMenuOpen(false)}
        onToggleDropdown={(id) =>
          setActiveMobileDropdownId((current) => (current === id ? null : id))
        }
      />
    </section>
  );
}

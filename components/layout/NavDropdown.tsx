import Link from "next/link";
import type { DropdownGroup } from "./NavLink";
import { getPhpLinkTargetProps } from "./linkUtils";

interface INavDropdown {
  content: DropdownGroup[];
  open: boolean;
  onMouseLeave: () => void;
}

export function NavDropdown({ content, open, onMouseLeave }: INavDropdown) {
  if (!open || !content.length) return null;

  return (
    <div
      className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-black/80 px-8 py-10 text-white backdrop-blur-sm"
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {content.map((group) => (
          <div key={group.id}>
            {group.name ? (
              <h3 className="mb-4 font-helvetica-condensed text-sm font-black uppercase tracking-wide">
                {group.name}
              </h3>
            ) : null}
            <ul className="space-y-3 text-base">
              {group.items.map((item) => {
                const phpLinkTargetProps = getPhpLinkTargetProps(item.link);

                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      {...phpLinkTargetProps}
                      className="text-white/80 transition-colors duration-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

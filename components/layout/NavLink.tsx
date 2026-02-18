import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

export type DropdownItem = {
  id: string;
  name: string;
  link: string;
};

export type DropdownGroup = {
  id: string;
  name?: string;
  items: DropdownItem[];
};

export type NavItem = {
  id: string;
  name: string;
  link?: string;
  dropdown?: DropdownGroup[];
};

interface INavLink {
  item: NavItem;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
}

export function NavLink({
  item,
  isActive,
  onMouseEnter,
  onFocus,
  onClick,
}: INavLink) {
  const hasDropdown = Boolean(item.dropdown?.length);

  if (!hasDropdown) {
    return (
      <Link
        href={item.link ?? "/"}
        className="font-medium transition-colors duration-200 hover:text-white/80"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="flex items-center justify-center gap-1 font-medium transition-colors duration-200 hover:text-white/80"
      aria-haspopup="true"
      aria-expanded={isActive}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onClick={onClick}
    >
      <span>{item.name}</span>
      <BiChevronDown
        className={`transition-transform duration-200 ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

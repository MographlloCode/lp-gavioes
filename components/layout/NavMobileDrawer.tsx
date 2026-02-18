import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  BiChevronDown,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
  BiSolidCartAlt,
  BiX,
} from "react-icons/bi";
import type { NavItem } from "./NavLink";

interface INavMobileDrawer {
  open: boolean;
  items: NavItem[];
  activeDropdownId: string | null;
  onClose: () => void;
  onToggleDropdown: (id: string) => void;
}

export function NavMobileDrawer({
  open,
  items,
  activeDropdownId,
  onClose,
  onToggleDropdown,
}: INavMobileDrawer) {
  const menuListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.03,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-black text-white lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <motion.div
            className="flex h-full flex-col px-6 pb-6 pt-8"
            initial={{ y: 12, opacity: 0.98 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0.95 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-helvetica-condensed text-3xl font-black uppercase leading-none">
                Menu
              </h2>
              <button
                type="button"
                className="rounded-md p-1 text-white/90 transition-colors duration-200 hover:text-white"
                aria-label="Fechar menu"
                onClick={onClose}
              >
                <BiX size={24} />
              </button>
            </div>

            <nav className="mt-8 flex-1 overflow-y-auto pr-1">
              <motion.ul
                className="space-y-6"
                variants={menuListVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {items.map((item) => {
                  const hasDropdown = Boolean(item.dropdown?.length);

                  if (!hasDropdown) {
                    return (
                      <motion.li key={item.id} variants={menuItemVariants}>
                        <Link
                          href={item.link ?? "/"}
                          className="font-helvetica-condensed text-lg font-bold uppercase tracking-wide"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    );
                  }

                  const isExpanded = activeDropdownId === item.id;

                  return (
                    <motion.li key={item.id} variants={menuItemVariants}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between font-helvetica-condensed text-lg font-bold uppercase tracking-wide"
                        aria-expanded={isExpanded}
                        onClick={() => onToggleDropdown(item.id)}
                      >
                        <span>{item.name}</span>
                        <BiChevronDown
                          className={`transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            className="overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="mt-4 space-y-6 pl-3">
                              {item.dropdown?.map((group) => (
                                <div key={group.id}>
                                  {group.name ? (
                                    <h3 className="mb-2 font-helvetica-condensed text-sm font-black uppercase tracking-wide">
                                      {group.name}
                                    </h3>
                                  ) : null}
                                  <ul className="space-y-2">
                                    {group.items.map((subItem) => (
                                      <li key={subItem.id}>
                                        <Link
                                          href={subItem.link}
                                          className="text-base text-white/85 transition-colors duration-200 hover:text-white"
                                          onClick={onClose}
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>

            <motion.div
              className="mt-6 flex items-center justify-between border-t border-white/10 pt-5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18, delay: 0.06 }}
            >
              <Link
                href="https://www.lojagavioes.com.br/"
                target="__blank"
                className="inline-flex items-center gap-2 rounded-sm bg-zinc-900 px-3 py-2 font-helvetica-condensed text-sm font-bold uppercase tracking-wide"
                onClick={onClose}
              >
                <BiSolidCartAlt />
                <span>Loja</span>
              </Link>
              <div className="flex items-center gap-4 text-lg">
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
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

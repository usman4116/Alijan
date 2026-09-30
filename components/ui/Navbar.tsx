"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${compact ? " is-compact" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="#home" aria-label="Ali Jan — home">
          <span className="brand-mark">
            <Image
              src={profile.avatar}
              alt="Ali Jan"
              width={42}
              height={42}
              className="brand-avatar"
              priority
            />
          </span>
          <span className="brand-copy"><b>Ali Jan</b><small>Civil · HSE</small></span>
        </Link>
        <div className="nav-links">
          {navItems.map(([label, id]) => <Link key={id} href={`#${id}`}>{label}</Link>)}
        </div>
        <a className="nav-cta" href="mailto:alijan.official6@gmail.com?subject=CV%20request">Request CV</a>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {navItems.map(([label, id]) => <Link key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}
            <a href="mailto:alijan.official6@gmail.com?subject=CV%20request">Request CV</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

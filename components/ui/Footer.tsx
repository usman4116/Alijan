import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-identity">
          <span className="footer-avatar-wrap">
            <Image
              src={profile.avatar}
              alt="Ali Jan"
              width={48}
              height={48}
              className="footer-avatar"
            />
          </span>
          <div><strong>Ali Jan</strong><small>Civil Engineer & HSE Professional</small></div>
        </div>
        <div className="footer-nav" aria-label="Footer navigation">
          {navItems.map(([label, id]) => <Link href={`#${id}`} key={id}>{label}</Link>)}
        </div>
        <a className="footer-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="footer-bottom"><span>© 2026 Ali Jan. All rights reserved.</span><span>Build · Inspect · Protect · Execute · Deliver</span></div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../ui/NavItem";
import IconButton from "../ui/IconButton";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "TV Shows", href: "/tv-shows" },
  { label: "My List", href: "/my-list" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.leftSection}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/Logo/cinesphere-high-resolution-logo-transparent.png"
                alt="Cinesphere Logo"
                width={180}
                height={50}
                priority
              />
            </Link>

            <nav className={styles.desktopNav}>
              {NAV_LINKS.map((link) => (
                <NavItem key={link.label} label={link.label} href={link.href} />
              ))}
            </nav>
          </div>

          <div className={styles.rightSection}>
            <Link href="/my-list" className={styles.ctaLink}>
              Watchlist
            </Link>
            <button
              type="button"
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileNavDropdown}>
          <nav className={styles.mobileNavList}>
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.label}
                label={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
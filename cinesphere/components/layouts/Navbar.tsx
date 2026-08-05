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
          
          {/* Left Section */}
          <div className={styles.leftSection}>
            <Link href="/">
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

          {/* Right Section */}
          <div className={styles.rightSection}>
            <IconButton 
              src="/Logo/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" 
              alt="Search" 
            />
            
            <Link href="/profile" className={styles.profileLink}>
              <Image 
                src="/Logo/user.png" 
                alt="User Profile" 
                width={32} 
                height={32} 
                className={styles.profileImage}
              />
            </Link>

            <div className={styles.mobileMenuBtn}>
              <IconButton 
                src={isMobileMenuOpen ? "/Logo/close_logo.svg" : "/Logo/menu_logo.svg"} 
                alt="Menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
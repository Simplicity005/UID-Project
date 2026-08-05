import Link from "next/link";
import styles from "./NavItem.module.css";

type NavItemProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

export default function NavItem({ label, href, onClick }: NavItemProps) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={styles.navLink}
    >
      {label}
    </Link>
  );
}
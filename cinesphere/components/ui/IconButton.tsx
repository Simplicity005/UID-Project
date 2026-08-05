import Image from "next/image";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string; 
};

export default function IconButton({ src, alt, onClick, className = "" }: IconButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      <Image src={src} alt={alt} width={28} height={28} className={styles.image} />
    </button>
  );
}
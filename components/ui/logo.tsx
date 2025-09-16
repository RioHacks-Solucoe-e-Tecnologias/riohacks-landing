import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

interface LogoProps {
  href?: string;
  external?: boolean;
  className?: string;
  width?: string;
  height?: string;
}

export default function Logo({ 
  href = "/", 
  external = false, 
  className = "",
  width = "w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20", // Tamanhos menores
  height = "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20" // Tamanhos menores
}: LogoProps) {
  
  const logoImage = (
    <Image 
      src={logo} 
      alt="RioHacks Logo" 
      width={80}  // Reduzido para melhor proporção
      height={80} // Reduzido para melhor proporção
      priority
      className={`${width} ${height} object-contain ${className}`}
    />
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 transition-opacity hover:opacity-80"
        aria-label="RioHacks"
      >
        {logoImage}
      </a>
    );
  }

  return (
    <Link 
      href={href} 
      className="inline-flex shrink-0 transition-opacity hover:opacity-80" 
      aria-label="RioHacks"
    >
      {logoImage}
    </Link>
  );
}
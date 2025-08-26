import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="RioHacks">
      <Image 
        src={logo} 
        alt="RioHacks Logo" 
        width={65}  // ajuste conforme necessário
        height={65} // mantém proporção
        priority
      />
    </Link>
  );
}
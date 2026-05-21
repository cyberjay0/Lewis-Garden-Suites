import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const heightClass = {
  sm: "h-9 sm:h-10",
  md: "h-11",
  lg: "h-14",
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <Image
      src="/images/logo-official.png"
      alt="Lewis Garden"
      width={560}
      height={160}
      className={`w-auto max-w-[130px] shrink-0 object-contain object-left sm:max-w-[150px] ${heightClass[size]} ${className}`}
      priority={size === "sm"}
    />
  );
}

import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo = ({ width = 50, height = 50 }: LogoProps) => {
  return (
    <Image
      src={"/logo.png"}
      alt="Bích Ngọc Beauty"
      width={width}
      height={height}
    />
  );
};

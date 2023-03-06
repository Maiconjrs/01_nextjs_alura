import NextLink from "next/link";
import LinkEstilizado from "../LinkEstilizado";

export default function Link({ children, href, onClick, ref, ...props }) {
  return (
    <NextLink href={href} href={href} onClick={onClick} ref={ref} {... props}>
      {children}
    </NextLink>
  );
}

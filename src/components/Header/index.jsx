import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
];

export const Header = () => {
  return (
    <header>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        )
      })}
    </header>
  );
}
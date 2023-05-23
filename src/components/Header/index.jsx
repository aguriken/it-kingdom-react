import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className="flex justify-between w-80 mb-4">
      {NAV_ITEMS.map((item) => {
        return (
            <Link className="block" key={item.href} href={item.href}>{item.label}</Link>
        )
      })}
    </header>
  );
}
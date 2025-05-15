"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Settings, type LucideIcon, Rocket } from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  text: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, text: "Home", href: "/" },
  { icon: Rocket, text: "Dashboard", href: "/main" },
  // { icon: User, text: "Profile", href: "/profile" },
  // { icon: Settings, text: "Settings", href: "/settings" },
];

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.text}>
            <Link
              href={item.href}
              className={`flex flex-col items-center p-2 ${pathname === item.href ? "text-blue-400" : ""}`}
            >
              <item.icon size={24} />
              <span className="mt-1 text-xs">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;

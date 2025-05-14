"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  Rocket,
  type LucideIcon,
  PocketKnife,
  Frame,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  icon: LucideIcon;
  text: string;
  href: string;
}

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const navItems: NavItem[] = [
  { icon: Home, text: "Home", href: "/" },
  { icon: Rocket, text: "Dashboard", href: "/main" },
  { icon: User, text: "Profile", href: "/profile" },
  { icon: Frame, text: "Frames", href: "/main/frames" },
  { icon: PocketKnife, text: "Tools", href: "/main/tools" },
  { icon: Settings, text: "Settings", href: "/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleCollapse }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 top-0 z-10 h-screen bg-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <nav className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && <span className="text-xl font-bold">Menu</span>}
          <button
            onClick={toggleCollapse}
            className="rounded p-2 hover:bg-gray-700"
          >
            {isCollapsed ? (
              <ChevronRight size={24} />
            ) : (
              <ChevronLeft size={24} />
            )}
          </button>
        </div>
        <ul className="flex-1">
          {navItems.map((item) => (
            <li key={item.text}>
              <Link
                href={item.href}
                className={`flex items-center p-4 hover:bg-gray-700 ${pathname === item.href ? "bg-gray-700" : ""}`}
              >
                <item.icon size={24} />
                {!isCollapsed && <span className="ml-4">{item.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
        {!isCollapsed && (
          <div className="p-4">
            <ThemeToggle />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;

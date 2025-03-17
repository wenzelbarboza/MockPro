"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  console.log("this is the path: ", pathname);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {isMobile && (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="flex flex-1 items-center justify-between space-x-4 md:space-x-6">
              <div className="font-bold">Logo</div>
              <ThemeToggle />
            </div>
          </div>
        </header>
      )}
      <div className="flex flex-1">
        {!isMobile && (
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        )}
        <main
          className={`flex-1 ${!isMobile && (isSidebarCollapsed ? "ml-16" : "ml-64")}`}
        >
          {children}
        </main>
      </div>
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Layout;

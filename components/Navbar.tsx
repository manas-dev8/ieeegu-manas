"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import { ModeToggle } from "./darktheme"; // updated import

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Awards", href: "/awards" },
  { name: "Events", href: "/events" },
  { name: "Conferences", href: "/conferences" },
  { name: "Team", href: "/team" },
  { name: "Join Us", href: "/join" },
  { name: "SDG", href: "https://sdgs.un.org/goals" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setLogo("https://res.cloudinary.com/dgna3swph/image/upload/v1738944245/ieee-logo_ow9dwc.png");
    } else {
      setLogo("https://res.cloudinary.com/anurag256k/image/upload/v1735503028/IEEE/ieee-logo_ufoyaw.png");
    }
  }, [theme, systemTheme]);

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image className="h-12 w-auto" src={logo} width={480} height={480} alt="IEEE Logo" priority />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Societies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
                  Societies
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>OUR SOCIETIES</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/cs">IEEE Computer Society</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ias">IEEE Industry Applications Society</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wie">IEEE Women in Engineering</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark Mode Toggle */}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gray-300 text-black dark:text-white dark:bg-gray-700 hover:bg-gray-400">
                  Societies
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>OUR SOCIETIES</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/cs">IEEE Computer Society</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ias">IEEE Industry Applications Society</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wie">IEEE Women in Engineering</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

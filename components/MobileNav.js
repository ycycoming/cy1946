"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav({ currentPath = "/" }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "AI销冠", color: "text-blue-600" },
    { href: "/aikf", label: "AI客服", color: "text-orange-600" },
    { href: "/aish", label: "AI售后", color: "text-indigo-600" },
    { href: "/aigw", label: "AI顾问", color: "text-purple-600" },
    { href: "/aiyy", label: "AI运营", color: "text-pink-600" },
    { href: "/aihk", label: "AI获客", color: "text-green-600" },
    { href: "/geo", label: "GEO", color: "text-cyan-600" },
    { href: "/oem", label: "代理贴牌", color: "text-emerald-600" },
    { href: "/hehuo", label: "合伙人", color: "text-amber-600" },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-ghost btn-square"
        aria-label="菜单"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-16 right-0 w-64 bg-white shadow-xl z-50 rounded-l-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg transition-all ${
                        currentPath === item.href
                          ? `${item.color} bg-gray-50 font-semibold`
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

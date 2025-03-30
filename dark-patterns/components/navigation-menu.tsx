"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const routes = [
  { path: "/", label: "Home" },
  { path: "/scarcity", label: "Scarsità" },
  { path: "/nagging", label: "Insistenza" },
  { path: "/disguised-ads", label: "Pubblicità Mascherate" },
  { path: "/forced-action", label: "Azione Forzata" },
  { path: "/friend-spam", label: "Friend Spam" },
  { path: "/interface-interference", label: "Interferenza UI" },
]

export function NavigationMenu() {
  const pathname = usePathname()

  return (
    <div className="mb-6 border-b bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto py-3">
          <nav className="flex space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === route.path ? "bg-primary text-white shadow-sm" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}


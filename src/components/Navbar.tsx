import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Mountain } from "lucide-react"

const navLinks = [
  { label: "首页", path: "/" },
  { label: "产品", path: "/products" },
  { label: "联系我们", path: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl transition-tech ${
        scrolled ? "border-b border-border shadow-nav" : ""
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Mountain className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold text-foreground">
            CloudPeak
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-tech hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm">免费试用</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="菜单"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium py-2 transition-tech ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <Button size="sm" className="w-full">
                免费试用
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
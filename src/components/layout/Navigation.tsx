import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Twitter, Mail, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:artist@example.com", label: "Email" },
];

interface NavigationProps {
  transparent?: boolean;
}

export function Navigation({ transparent = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        transparent ? "bg-transparent" : "bg-background/95 backdrop-blur-md border-b border-border"
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "flex items-center gap-2 font-display text-2xl font-semibold transition-colors",
              transparent ? "text-cream" : "text-foreground"
            )}
          >
            <Palette className="w-6 h-6" />
            <span>Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm uppercase tracking-wider transition-all duration-300 hover:opacity-70",
                  transparent ? "text-cream/90 hover:text-cream" : "text-foreground/80 hover:text-foreground",
                  location.pathname === link.href && (transparent ? "text-cream border-b-2 border-cream" : "text-primary border-b-2 border-primary")
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  "transition-all duration-300 hover:scale-110",
                  transparent ? "text-cream/80 hover:text-cream" : "text-foreground/70 hover:text-foreground"
                )}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              transparent ? "text-cream" : "text-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-charcoal/95 backdrop-blur-lg animate-fade-in">
            <div className="flex flex-col py-6 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-4 text-lg font-display text-cream/90 border-b border-cream/10 transition-colors hover:text-cream",
                    location.pathname === link.href && "text-ochre"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-6 mt-6 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-cream/80 hover:text-cream transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

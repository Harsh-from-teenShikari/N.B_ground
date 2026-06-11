import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Players", path: "/player-dashboard" },
  { label: "Booking", path: "/ground-booking" },
  { label: "Tournaments", path: "/tournaments" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/">
          Cricket Academy
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

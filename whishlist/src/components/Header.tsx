import { useState } from "react";

const NavLinks = [
  { label: "New arrivals", path: "#" },
  { label: "Designer", path: "#" },
  { label: "Bags", path: "#" },
  { label: "Shoes", path: "#" },
  { label: "Clothing", path: "#" },
  { label: "Jewellery", path: "#" },
  { label: "Accessories", path: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlerOpenMenu = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <div
      className={`flex items-center relative xl:flex-col py-4 ${
        menuOpen ? "group is-open" : ""
      }`}
    >
      <button className="relative z-20 xl:hidden" onClick={handlerOpenMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
      </button>
      <img
        className="mx-auto max-w-[130px] h-3.5 xl:max-w-[250px] xl:h-9 xl:mb-4"
        src="https://media.lampoo.com/logo/websites/1/LAMPOO_LOGOTYPE_BLACK_RGB.png"
        alt="Company logo"
      />
      <div className="header-content group-[.is-open]:translate-x-0 xl:pt-4 xl:border-t-2">
        <nav className="nav">
          {NavLinks.map((link, index) => (
            <a
              className="font-bold hover:opacity-50"
              key={index}
              href={link.path}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;

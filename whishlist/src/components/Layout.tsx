import { ReactNode } from "react";

interface LayoutChildren {
  children?: ReactNode
}

const Layout = ({ children }:LayoutChildren) => {
  return <div className="max-w-7xl mx-auto px-4">{children}</div>;
};

export default Layout;

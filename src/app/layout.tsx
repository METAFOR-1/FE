import Footer from "@/design/Footer";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="font-sf-pro">
      {children}
      {pathname !== "/" && <Footer />}
    </div>
  );
}

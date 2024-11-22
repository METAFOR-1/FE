import Footer from "@/design/Footer";
import Header from "@/design/Header";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="font-sf-pro">
      {pathname !== "/" && <Header />}
      {children}
      {pathname !== "/" && <Footer />}
    </div>
  );
}

import Footer from "@/design/Footer";
import Header from "@/design/Header";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  const footerIgnores = ["/record", "/result"];
  return (
    <div className="font-sf-pro">
      {pathname !== "/record" && <Header />}
      {children}
      {!footerIgnores.includes(pathname) && <Footer />}
    </div>
  );
}

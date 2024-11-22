import Footer from "@/design/Footer";
import Header from "@/design/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  const footerIgnores = ["/record", "/result"];
  return (
    <div className="font-sf-pro">
      {pathname !== "/record" && <Header />}
      <Outlet />
      {!footerIgnores.includes(pathname) && <Footer />}
    </div>
  );
}

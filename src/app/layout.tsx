import Footer from "@/design/Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sf-pro">
      {children}
      <Footer />
    </div>
  );
}

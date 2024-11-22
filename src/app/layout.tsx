import Footer from "@/design/Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

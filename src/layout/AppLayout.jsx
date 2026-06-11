import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";

export function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

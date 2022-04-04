import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}

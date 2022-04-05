import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-slate-900">{children}</main>
    </div>
  );
}

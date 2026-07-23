import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (

      <div className="flex min-h-screen flex-col bg-slate-100 text-white">
        <Navbar />

        <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
          <Outlet />
        </main>

        <Footer />
      </div>
   
  );
}
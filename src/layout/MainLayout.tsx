import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";


export default function MainLayout(){

    return(

        <div className="min-h-screen flex flex-col bg-slate-50">

            <Navbar />

            <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
                <Outlet />
            </main>


            <Footer />
        
        
        
        
        </div>
    )
}
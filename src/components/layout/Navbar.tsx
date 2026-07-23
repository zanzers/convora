import { Link } from "react-router-dom";




function Navbar() {

  return (
    <header className="border-b bg-white shadow-s">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <Link
             to="/"
             className="text-xl font-bold text-blue-600">
                Convora
            </Link>


            <nav className="flex gap-6 px-10">
                <Link to="/">Home</Link >
                <Link to="/features">Features</Link >
                <Link to="/pricing">Pricing</Link >
                <Link to="/login">Login</Link >
                <Link to="/signIn">Sign In</Link >
            </nav>

        </div>
    </header>
  )
}

export default Navbar

import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"


export const Header = () => {
  return (
    <div className="border-b-2 border-b-red-500 p-6">
        <div className="contanier mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-red-500" >
                Twiggy
            </Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
    </div>

  )
}

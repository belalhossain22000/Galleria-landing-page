import Link from 'next/link'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="py-5 fixed top-0 w-full z-50 bg-[#292929]">
        <div className="container flex items-center">
            <Link href="/">
                <h1>Galleria</h1>
            </Link>
            <ul className="ml-auto lg:flex space-x-12 text-lg font-mont font-semibold text-white hidden">
                <li><Link href='/'>Home</Link></li>
            </ul>
            <div class="ml-auto text-2xl menu-trigger lg:hidden">
                <FaBars/>
            </div>
        </div>
   </header>
  )
}

export default Header
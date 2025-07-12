import { useState } from "react";
import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { Menu, X } from "lucide-react";
const Navbar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggelNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-md border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <img src={logo} className="h-10 w-10 mr-2" alt="logo " />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-orange-400 transition duration-300" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="border rounded-md px-3 py-2 hover:border-orange-500 transition duration-300">
              Sign In
            </a>
            <a href="#" className="rounded-md px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800">
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggelNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex flex-col w-full p-12 justify-center items-center bg-neutral-900 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-center">
                  <a className="hover:text-orange-400 transition duration-300" href={item.href}>{item.label}</a>
                </li>
              ))} 
            </ul>
            <div className="flex justify-center space-x-6 items-center">
              <a href="#" className="border rounded-md px-3 py-2 hover:border-orange-500 transition duration-300">
                Sign In
              </a>
              <a href="#" className="rounded-md px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800">
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
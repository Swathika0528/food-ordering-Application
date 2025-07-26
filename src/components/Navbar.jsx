import { FaHome } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { SiSimplelogin } from "react-icons/si";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';



function Navbar()
{
    return <div className="header">
        <img className="logo" src="logo.jpeg"></img>
        <div className="menu">
        <Link to="/"><FaHome />Home</Link>
        <Link to="/About"><IoFastFoodOutline />About</Link>
        <Link to="/Contact"><TiContacts />Contact</Link>
        <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
    </div>
}

export default Navbar;
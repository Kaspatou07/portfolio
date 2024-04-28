import Navbar from "../navbar/navbar";
import logo from "./logo/logo.webp"
import './Header.scss'



function Header() {
    return (
      <header>
          <div className="BgHeader">
          <img className="logo" src={logo} alt="Logo" />
          <Navbar />
        </div>
        
      </header>
    );
  }
  
  export default Header;
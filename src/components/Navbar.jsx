import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Logo2 from '../assets/logo2.png'
function Navbar() {
    return (
        <nav className="alac-pack-new-navbar">
            <div className="alac-pack-new-nav-left">
                <NavLink to="/" className="alac-pack-new-nav-logo">
                    <img src={Logo} className='alac-pack-new-va-mid alac-pack-new-logo-large' alt="Logo" />
                    <img src={Logo2} className='alac-pack-new-va-mid alac-pack-new-logo-small' alt="Logo" />
                </NavLink>
            </div>
            <div className="alac-pack-new-nav-btn">
                <NavLink className="alac-pack-new-nav-login-btn">Login </NavLink>
                <NavLink className="alac-pack-new-nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>

    );
}

export default Navbar;
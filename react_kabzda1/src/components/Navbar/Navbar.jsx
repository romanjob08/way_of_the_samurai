import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div>
                <NavLink to={'/profile'} className = {navData=>navData.isActive ? cl.active : cl.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'} className = {navData=>navData.isActive ? cl.active : cl.item }>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/news'} className = {navData=>navData.isActive ? cl.active : cl.item }>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music'} className = {navData=>navData.isActive ? cl.active : cl.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings'} className = {navData=>navData.isActive ? cl.active : cl.item }>Settings</NavLink>
            </div>
            <div>
                <NavLink to={'/friends'} className = {navData=>navData.isActive ? cl.active : cl.item }>Friends</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
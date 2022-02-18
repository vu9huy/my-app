import './Navigation.scss'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="topnav">
            <NavLink activeClassName='nav-active' to="/my-app" exact>Home</NavLink>
            <NavLink activeClassName='nav-active' to="/my-app/todo-list">TodoList</NavLink>
            <NavLink activeClassName='nav-active' to="/my-app/add-products">Add Products</NavLink>
            <NavLink activeClassName='nav-active' to="/my-app/display-products">Display Products</NavLink>
            <NavLink activeClassName='nav-active' to="/my-app/weather-app">Weather App</NavLink>
            <NavLink activeClassName='nav-active' to="/my-app/otp">OTP</NavLink>
        </div>
    )
}
export default Navigation;
import { Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    return(
        <header className="header">
            <a href="/star-wars/" className="logo">ST</a>
            <input className="side-menu" type="checkbox" id="side-menu"></input>
            <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
            <nav className="nav">
                <ul className="menu">
                    <li><Link to='/star-wars/'>Main</Link></li>
                    <li><Link to='/star-wars/films'>Films</Link></li>
                    <li><Link to='/star-wars/people'>People</Link></li>
                    <li><Link to='/star-wars/planets'>Planets</Link></li>
                    <li><Link to='/star-wars/starships'>Starships</Link></li>
                    <li><Link to='/star-wars/vehicles'>Vehicles</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation; 

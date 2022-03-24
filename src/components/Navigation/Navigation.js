import { Link, useLocation } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    const url = useLocation();
    console.log(url);
    return(
        <ul className="nav">
            <li><Link to='/'>Main</Link></li>
            <li><Link to='/films'>Films</Link></li>
            <li><Link to='/people'>People</Link></li>
            <li><Link to='/planets'>Planets</Link></li>
            <li><Link to='/starships'>Starships</Link></li>
        </ul>
    )
}

export default Navigation; 

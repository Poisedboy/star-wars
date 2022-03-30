import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <ul className="nav">
            <li><Link to='/'>Main</Link></li>
            <li><Link to='/films'>Films</Link></li>
            <li><Link to='/people'>People</Link></li>
            <li><Link to='/planets'>Planets</Link></li>
            <li><Link to='/starships'>Starships</Link></li>
            <li><Link to='/vehicles'>Vehicles</Link></li>
        </ul>
    )
}

export default Navigation; 

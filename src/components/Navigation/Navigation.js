import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <ul className="nav">
            <li><Link to='/star-wars/'>Main</Link></li>
            <li><Link to='/star-wars/films'>Films</Link></li>
            <li><Link to='/star-wars/people'>People</Link></li>
            <li><Link to='/star-wars/planets'>Planets</Link></li>
            <li><Link to='/star-wars/starships'>Starships</Link></li>
            <li><Link to='/star-wars/vehicles'>Vehicles</Link></li>
        </ul>
    )
}

export default Navigation; 

import {Link} from 'react-router-dom';

function Menu()
{
  return (<div>
      <ul>
        <li><Link to="/movies">Movies</Link></li>
      </ul>
    </div>);
}

export default Menu;
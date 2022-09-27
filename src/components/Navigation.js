import {Outlet, Link} from 'react-router-dom'




export default function Navigation() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/favoritesSongs'>FavoritesSongs</Link>
                </li>
                <li>
                    <Link to='/search'>Search</Link>
                </li>
               
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

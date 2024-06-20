import './index.css'

import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul className="nav-list aside-nav">
                {/* <!-- TODO:此处要使用路由实现 --> */}
                <li><Link to="/" className="nav-item aside-nav" >Home</Link></li>
                <li><Link to="/catalog" className="nav-item aside-nav" >Catalog</Link></li>
                <li><Link to="/comment" className="nav-item aside-nav" >Comment</Link></li>
                <li><Link to="/personal" className="nav-item aside-nav" >Personal</Link></li>
                {/* <li><a href="#" className="nav-item aside-nav">Home</a></li>
                <li><a href="#" className="nav-item aside-nav">Catalog</a></li>
                <li><a href="#" className="nav-item aside-nav">Comment</a></li>
                <li><a href="#" className="nav-item aside-nav">Personal</a></li> */}
            </ul>
        </nav>
    )
}
import './index.css'
export default function Nav() {
    return (
        <nav>
            <ul className="nav-list aside-nav">
                {/* <!-- TODO:此处要使用路由实现 --> */}
                <li><a href="#" className="nav-item aside-nav">Home</a></li>
                <li><a href="#" className="nav-item aside-nav">Catalog</a></li>
                <li><a href="#" className="nav-item aside-nav">Comment</a></li>
                <li><a href="#" className="nav-item aside-nav">Personal</a></li>
            </ul>
        </nav>
    )
}
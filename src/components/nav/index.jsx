// 导入Nav样式
import './index.css'
// 导入路由所需依赖
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            {/* 使用路由，对主页，产品区，反馈信息，个人主页进行跳转 */}
            <ul className="nav-list aside-nav">
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
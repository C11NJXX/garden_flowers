import './index.css'
import logo from "../../resources/icons/logo.png"
import userSvg from "../../resources/icons/user.svg"
import heartSvg from "../../resources/icons/heart.svg"
import shoppingCartSvg from "../../resources/icons/shopping-cart.svg"

export default function Header() {
    return(
        <header>
        <div className="logo-header">
          <img src={logo}/>
        </div>
        <div className="options-header">
          {/* <!-- TODO:此处要使用路由实现 --> */}
          <ul className="nav-list">
            <li><a href="#" className="nav-item"><img src= {userSvg}/>Register</a>
            </li>
            {/* <!-- TODO:此处心愿单未实现 --> */}
            <li><a href="#" className="nav-item"><img src= {heartSvg}/>WishList</a></li>
            {/* <!-- TODO:此处购物车未实现 --> */}
            <li><a href="#" className="nav-item"><img src= {shoppingCartSvg} sizes="16px" />Cart</a>
            </li>
            {/* <!-- TODO:此处搜索框未实现 --> */}
            <li><input type="search" placeholder="Search" /></li>
          </ul>
        </div>
      </header>
    )
}